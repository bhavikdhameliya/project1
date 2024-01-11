const express = require('express');
const { showAllProduct, 
       specificProduct 
    } = require('../../controller/user/product.controller');
const { verifyToken } = require('../../helpers/tokenverify');
const productRoutes = express.Router();

productRoutes.get('/showall-product', verifyToken , showAllProduct);
productRoutes.get('/show-product', verifyToken, specificProduct);

module.exports = productRoutes