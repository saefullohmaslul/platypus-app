const passport = require('./passport-middleware')

const guard = passport.authenticate('jwt', {
    session: false,
})

module.exports = guard