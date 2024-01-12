const express = require('express');
const reviewRoutes = express.Router();
const {verifyToken} = require('../../helpers/tokenverify');
const {
    addToReview,
    getallReview,
    getfavourite,
    deleteReview
} = require('../../controller/user/review.controller')

// reviewRoutes.post('/addToreview', verifyToken, addToReview);
// reviewRoutes.get('/allreview', verifyToken, getallReview);
// // favouriteRoute.get('/getfavourite', verifyToken, getfavourite);
// reviewRoutes.delete('/delete-review', verifyToken, deleteReview);

module.exports = reviewRoutes;