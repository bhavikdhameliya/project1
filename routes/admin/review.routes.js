const express = require('express');
const { showAllreview, 
    } = require('../../controller/admin/review.controller');
const { verifyToken } = require('../../helpers/tokenverify');
const reviewRoutes = express.Router();

reviewRoutes.get('/showall-review', verifyToken , showAllreview);

module.exports = reviewRoutes