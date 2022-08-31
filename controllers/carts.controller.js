const Carts = require("../db/schemas/cart.schema")

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