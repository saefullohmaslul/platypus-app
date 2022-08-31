const { createCart, getCart } = require('../controllers/carts.controller')

const router = require('express').Router()

router.post('/', createCart)
router.get('/:id', getCart)

module.exports = router