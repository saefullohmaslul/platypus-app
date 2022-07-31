const Joi = require("joi");

const createBookSchema = Joi.object({
    title: Joi.string().required(),
    category_id: Joi.number().required(),
    author: Joi.string().required(),
    stock: Joi.number().required(),
    publisher: Joi.string().required(),
    total_page: Joi.number().required(),
    publish_date: Joi.date().required(),
})

module.exports = createBookSchema