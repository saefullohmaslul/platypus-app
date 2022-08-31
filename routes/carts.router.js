const { createCart } = require('../controllers/carts.controller')

const router = require('express').Router()

router.post('/', createCart)

module.exports = router