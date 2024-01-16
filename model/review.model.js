const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    productItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    },
    productImage: [{
        type: String
    }],
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    isDelete: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('reviews', reviewSchema);
