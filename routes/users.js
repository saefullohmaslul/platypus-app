const { register } = require('../controllers/users')
const validation = require('../middlewares/validation.middleware')
const registerSchema = require('../validations/register.schema')

const router = require('express').Router()

router.post('/register', validation(registerSchema), register)

module.exports = router