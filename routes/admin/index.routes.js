const express = require('express');
const router = express.Router();
const adminRoutes = require('../../routes/admin/admin.routes');
const productRoutes = require('../../routes/admin/product.routes');
const cartRoutes = require('../../routes/admin/cart.routes');

router.use ('/admin', adminRoutes)
router.use ('/product', productRoutes)
router.use ('/cart', cartRoutes)

module.exports = router