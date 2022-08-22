const { createBook } = require('../controllers/books.controller')
const { authorization } = require('../middlewares/authorization.middleware')
const guard = require('../middlewares/guard-middleware')

const validation = require('../middlewares/validation.middleware')

const createBookSchema = require('../validations/create-book.schema')

const router = require('express').Router()

router.post('', guard, validation(createBookSchema), createBook)

module.exports = router