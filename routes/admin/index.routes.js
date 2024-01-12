const express = require('express');
const router = express.Router();
const adminRoutes = require('../../routes/admin/admin.routes');
const productRoutes = require('../../routes/admin/product.routes');
const cartRoutes = require('../../routes/admin/cart.routes');
const orderRoutes = require('../../routes/admin/order.routes');

router.use ('/admin', adminRoutes)
router.use ('/product', productRoutes)
router.use ('/cart', cartRoutes)
router.use ('/order', orderRoutes)

module.exports = router