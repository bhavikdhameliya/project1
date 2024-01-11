const express = require('express');
const orderRoute = express.Router();
const {verifyToken} = require('../../helpers/tokenverify');
const {addtoorder,
       getAllOrder,
       updateOrder,
       deleteOrder    } = require('../../controller/user/order.controller');

orderRoute.post('/addorder', verifyToken,addtoorder);
orderRoute.get('/AllOrder', verifyToken,getAllOrder);
orderRoute.put('/updateOrder', verifyToken,updateOrder);
orderRoute.delete('/deleteOrder', verifyToken,deleteOrder);

module.exports = orderRoute;