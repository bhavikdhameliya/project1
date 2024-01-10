const express = require('express');
const router = express.Router();
const adminRoutes = require('../../routes/admin/admin.routes');
const productRoutes = require('../../routes/admin/product.routes');

router.use ('/admin', adminRoutes)
router.use ('/product', productRoutes)

module.exports = router