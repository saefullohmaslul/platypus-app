const Joi = require("joi");

const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    name: Joi.string().min(3).required(),
    role_id: Joi.number().required(),
    avatar: Joi.string().required()
})

module.exports = registerSchema