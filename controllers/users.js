const { Users } = require('../db/models')
const bcrypt = require('bcrypt')

const register = async (req, res, next) => {
    try {
        const bodies = req.body

        const isUserExist = await Users.findOne({
            where: {
                email: bodies.email
            },
            attributes: ['id']
        })

        if (isUserExist) {
            throw {
                code: 400,
                message: 'Email already exist'
            }
        }

        const hasedPassword = bcrypt.hashSync(bodies.password, 12)

        const user = await Users.create({
            email: bodies.email,
            password: hasedPassword,
            name: bodies.name
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

module.exports = {
    register
}