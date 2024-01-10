const express = require('express');
const userRoutes = express.Router();
const{ verifyToken } = require('../../helpers/tokenverify');


const{
    Signup ,login ,getuser ,updateuser ,chagePassword ,deleteuser
}= require('../../controller/user/user.controller');


userRoutes.post('/signup',Signup);
userRoutes.post('/login',login);
userRoutes.get('/profile',verifyToken , getuser);
userRoutes.put('/update-profile',verifyToken , updateuser);
userRoutes.delete('/delete',verifyToken ,deleteuser);
userRoutes.put('/update-password',verifyToken , chagePassword);


module.exports = userRoutes;