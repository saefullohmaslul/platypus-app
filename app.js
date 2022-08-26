const express = require('express');
const session = require('express-session')

const userRouter = require('./routes/users')
const bookRouter = require('./routes/books.router')
const trxRouter = require('./routes/transactions.router')
const oauthRouter = require('./routes/auth.router')

const passport = require('./middlewares/passport-middleware')
const passportOauth = require('./middlewares/passport-oauth.middleware');
const logger = require('./helpers/winston.helper');


const app = express()

app.use(passport.initialize())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(
    session({
        secret: process.env.SECRET_SESSION,
        resave: false,
        saveUninitialized: false
    })
)
app.use(passportOauth.initialize())
app.use(passport.session())

app.use('/auth', userRouter)
app.use('/books', bookRouter)
app.use('/transactions', trxRouter)
app.use(oauthRouter)

app.use((err, req, res, next) => {
    logger.error(err)
    return res.status(err.code || 500).json({
        message: err.message || 'Internal server error'
    })
})

module.exports = app