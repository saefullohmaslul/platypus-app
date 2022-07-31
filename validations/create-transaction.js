const Joi = require("joi");

const createTransactionSchema = Joi.object({
    books: Joi.array().items(Joi.object({
        book_id: Joi.number().required(),
        qty: Joi.number().required()
    }))
})

module.exports = createTransactionSchema