const router = require('express').Router()
const passport = require('../middlewares/passport-oauth.middleware')

router.get('/oauth', passport.authenticate('google', {scope: ['email', 'profile']}))

router.get('/callback', passport.authenticate('google', {
    successRedirect: '/auth/register/oauth',
    failureRedirect: '/error',
}))

module.exports = router