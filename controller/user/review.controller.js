const { mongoose } = require('mongoose');
const reviewModel = require('../../model/review.model');
const productModel = require('../../model/product.model');

exports.addToReview = async (req, res) => {
    try {
        const { title, rating, productName } = req.body;
        const product = await productModel.findOne({ productName, isDelete: false });

        if (!product) {
            return res.status(404).json({ message: 'Product not found or deleted' });
        }
        const existingReview = await reviewModel.findOne({ user: req.user._id, cartItem: product._id });

        if (existingReview) {
            return res.status(400).json({ message: 'You have already reviewed this product' });
        }
        const newReview = new reviewModel({
            title,
            user: req.user._id,
            cartItem: product._id,
            username: req.user.username, 
            productImage: product.productImage, 
            rating,
        });
        await newReview.save();
        res.status(201).json({ review: newReview, message: 'Review added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
