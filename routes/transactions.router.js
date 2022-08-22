const { createTransaction } = require('../controllers/transactions.controller')
const { authorization } = require('../middlewares/authorization.middleware')
const createTransactionSchema = require('../validations/create-transaction')

const validation = require('../middlewares/validation.middleware')
const guard = require('../middlewares/guard-middleware')

const router = require('express').Router()

router.post('', guard, validation(createTransactionSchema), createTransaction)

module.exports = router