const Carts = require("../db/schemas/cart.schema")
const NewError = require("../helpers/error-stack.helper")

exports.createCart = async (req, res, next) => {
    try {
        const cart = await Carts.create(req.body)

        return res.status(200).json({
            message: 'success create cart',
            data: cart
        })
    } catch (error) {
        next(error)
    }
}

exports.getCart = async (req, res, next) => {
    try {
        const cartId = req.params.id
        const cart = await Carts.findOne({ _id: cartId })
        
        if (!cart) {
            throw new NewError(404, 'cart not found')
        }

        return res.status(200).json({
            message: 'success get cart',
            data: cart
        })
    } catch (error) {
        next(error)
    }
}