const { register, login, registerUsingOauth } = require('../controllers/users')

const validation = require('../middlewares/validation.middleware')

const registerSchema = require('../validations/register.schema')
const loginSchema = require('../validations/login.schema')

const router = require('express').Router()

router.post('/register', validation(registerSchema), register)
router.post('/login', validation(loginSchema), login)
router.get('/register/oauth', registerUsingOauth)

module.exports = router