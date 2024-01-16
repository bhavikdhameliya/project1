const express = require('express');
const reviewRoutes = express.Router();
const {verifyToken} = require('../../helpers/tokenverify');
const {
    addToreview,
    getAllreview,
    deleteReview
} = require('../../controller/user/review.controller')

reviewRoutes.post('/addToreview', verifyToken, addToreview);
reviewRoutes.get('/allreview', verifyToken, getAllreview);
// reviewRoutes.delete('/delete-review', verifyToken, deleteReview);

module.exports = reviewRoutes;