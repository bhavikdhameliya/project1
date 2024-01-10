const express = require('express');
const adminRoutes = express.Router();
const{ verifyToken } = require('../../helpers/tokenverify');


const{
    Signup , login
}= require('../../controller/admin/admin.controller');


adminRoutes.post('/signup',Signup);
adminRoutes.post('/login',login);


module.exports = adminRoutes;