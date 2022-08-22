require('dotenv').config()

const passport = require('passport')
const {Strategy, ExtractJwt} = require('passport-jwt')

passport.use(new Strategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.JWT_SECRET
}, (payload, done) => {
    done(null, {
        user_id: payload.user_id,
        role: payload.role
    })
}))

module.exports = passport