const { createTransaction } = require('../controllers/transactions.controller')
const { authorization } = require('../middlewares/authorization.middleware')
const createTransactionSchema = require('../validations/create-transaction')

const validation = require('../middlewares/validation.middleware')

const router = require('express').Router()

router.post('', authorization('Member'), validation(createTransactionSchema), createTransaction)

module.exports = router