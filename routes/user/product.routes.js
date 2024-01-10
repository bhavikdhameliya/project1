const express = require('express');
const { showAllProduct, specificProduct } = require('../../controller/user/user.controller');
const { verifyToken } = require('../../helpers/tokenverify');
const productRoute = express.Router();

productRoute.get('/showall-product', verifyToken , showAllProduct);
productRoute.get('/show-product', verifyToken, specificProduct);

module.exports = productRoute