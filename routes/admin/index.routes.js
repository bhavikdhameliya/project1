const express = require('express');
const router = express.Router();
const adminRoutes = require('../../routes/admin/admin.routes');
const productRoutes = require('../../routes/admin/product.routes');
const cartRoutes = require('../../routes/admin/cart.routes');
const orderRoutes = require('../../routes/admin/order.routes');
const reviewRoutes = require('../../routes/admin/review.routes');

router.use ('/admin', adminRoutes)
router.use ('/product', productRoutes)
router.use ('/cart', cartRoutes)
router.use ('/order', orderRoutes)
router.use ('/review', reviewRoutes)

module.exports = router