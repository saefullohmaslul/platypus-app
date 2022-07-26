const express = require('express');
const session = require('express-session')

const userRouter = require('./routes/users')
const bookRouter = require('./routes/books.router')
const trxRouter = require('./routes/transactions.router')
const oauthRouter = require('./routes/auth.router')
const filesRouter = require('./routes/files.router')
const cartsRouter = require('./routes/carts.router')

const passport = require('./middlewares/passport-middleware')
const passportOauth = require('./middlewares/passport-oauth.middleware');
const logger = require('./helpers/winston.helper');
const { default: mongoose } = require('mongoose');


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
app.use('/files', filesRouter)
app.use('/cart', cartsRouter)
app.use(oauthRouter)
app.get('/health', (req, res) => {
    return res.status(200).json({
        message: 'OK'
    })
})

mongoose.connect(process.env.MONGO_URI).then(() => console.log('success connect mongo')).catch(err => console.log(err))

app.use((err, req, res, next) => {
    logger.error(err)
    
    if (typeof err.code !== 'number') {
        err.code = undefined
    }

    return res.status(err.code || 500).json({
        message: err.message || 'Internal server error'
    })
})

module.exports = app