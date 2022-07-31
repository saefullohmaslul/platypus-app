const { createBook } = require('../controllers/books.controller')
const { authorization } = require('../middlewares/authorization.middleware')

const validation = require('../middlewares/validation.middleware')

const createBookSchema = require('../validations/create-book.schema')

const router = require('express').Router()

router.post('', authorization('Admin'), validation(createBookSchema), createBook)

module.exports = router