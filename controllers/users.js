require('dotenv').config()

const { Users, Roles, Cards, Points, sequelize } = require('../db/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { add } = require('date-fns')

const register = async (req, res, next) => {
    try {
        const bodies = req.body

        const [isRoleExist, isUserExist] = await Promise.all([
            Roles.findOne({
                where: {
                    id: bodies.role_id
                },
                attributes: ['id', 'name']
            }),
            Users.findOne({
                where: {
                    email: bodies.email
                },
                attributes: ['id']
            })
        ])

        // cek apakah role_id nya ada atau tidak
        if (!isRoleExist) {
            throw {
                code: 404,
                message: 'Role not found'
            }
        }

        // cek apakah ada user yang memiliki email yang sudah di register
        // if user exist, send error message
        if (isUserExist) {
            throw {
                code: 400,
                message: 'Email already exist'
            }
        }

        // hash pw karna secret
        const hasedPassword = bcrypt.hashSync(bodies.password, 12)
        let user = {}

        await sequelize.transaction(async trx => {
            // insert ke db
            user = await Users.create({
                email: bodies.email,
                password: hasedPassword,
                name: bodies.name,
                role_id: isRoleExist.id
            }, {
                transaction: trx
            })

            // create card dengan point
            const card = await Cards.create({
                user_id: user.id,
                type: 'PEMBACA',
                status: 'ACTIVE'
            }, {
                transaction: trx
            })

            // create point
            const now = new Date()
            await Points.create({
                card_id: card.id,
                point: 1000000,
                expired_at: add(now, { // jangan lupa insall date-fns (npm install date-fns)
                    years: 1,
                })
            }, {
                transaction: trx
            })
        })

        return res.status(200).json({
            code: 200,
            message: 'Success create user',
            data: {
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        next(error)
    }    
}

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body

        // cek email tersebut ada ngga di db
        const user = await Users.findOne({
            where: {
                email
            },
            attributes: ['id', 'role_id', 'password'],
            include: [
                {
                    model: Roles,
                    as: 'role',
                    attributes: ['id', 'name']
                }
            ]
        })

        // kalo gaada email, throw error user not found
        if (!user) {
            throw {
                code: 404,
                message: 'user not found'
            }
        }

        // kalo ada kita compare pw
        const isValidPassword = await bcrypt.compare(password, user.password)

        // kalo pwnya beda, throw invalid pw
        if (!isValidPassword) {
            throw {
                code: 403,
                message: 'invalid password'
            }
        }

        // kalo pwnya sama, generate token
        const token = jwt.sign({ user_id: user.id, role: user.role.name}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})

        // kirim token di respon
        return res.status(200).json({
            token
        })
    } catch (error) {
        next(error)
    }
}

const registerUsingOauth = async (req, res, next) => {
    try {        
        const {displayName, emails} = req.user
        const email = emails[0].value
        const roleId = 2

        let [user, role] = await Promise.all([
            Users.findOne({
                where: {
                    email
                }
            }),
            Roles.findOne({
                where: {
                    id: roleId
                }
            })
        ])


        if (!user) {
            await sequelize.transaction(async transaction => {
                user =  await Users.create({
                    email,
                    name: displayName,
                    role_id: roleId
                }, {transaction})

                const card = await Cards.create({
                    user_id: user.id,
                    type: 'PEMBACA',
                    status: 'ACTIVE'
                }, {
                    transaction
                })
    
                // create point
                const now = new Date()
                await Points.create({
                    card_id: card.id,
                    point: 1000000,
                    expired_at: add(now, { // jangan lupa insall date-fns (npm install date-fns)
                        years: 1,
                    })
                }, {
                    transaction
                })
            })
        }

        const token = jwt.sign({ user_id: user.id, role: role.name}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})

        return res.status(200).json({
            token
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login,
    registerUsingOauth
}