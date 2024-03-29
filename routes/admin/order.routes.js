const express = require('express');

const {showAllorder ,
       specificorder } = require('../../controller/admin/order.controller');
const { verifyToken } = require('../../helpers/tokenverify');
const orderRoutes = express.Router();

orderRoutes.get('/showall-order', verifyToken , showAllorder);
orderRoutes.get('/order-show', verifyToken, specificorder);

module.exports = orderRoutes