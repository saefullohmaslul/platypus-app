const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    user_id: Number,
    items: [{
        item_id: Number,
        item_name: String,
        item_price: Number,
        item_qty: Number
    }]
})

const Carts = mongoose.model('carts', cartSchema)

module.exports = Carts