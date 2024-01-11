const express = require('express');
const router = express.Router();
const userRoutes= require('../../routes/user/user.routes')
const productRoutes= require('../../routes/user/product.routes')
const cartRoutes= require('../../routes/user/cart.routes')
const orderRoutes= require('../../routes/user/order.routes')

router.use ('/users',userRoutes)
router.use ('/product',productRoutes)
router.use ('/cart',cartRoutes)
router.use ('/order',orderRoutes)

module.exports = router