const { mongoose } = require('mongoose');
const reviewModel = require('../../model/review.model');
const productModel = require('../../model/product.model');

exports.addToreview = async (req,res) => {
    try{
        const {productItem, rating} = req.body;
        let isreview = await reviewModel.findOne({productItem: productItem, user: req.user._id});
        if(isreview){
            return res.json("This item already in your review");
        }
        let isProduct = await productModel.findOne({_id: productItem, isDelete: false});
        if(!isProduct){
            return res.send({ message: "You don't have this Product"})
        }
        
        isreview = await reviewModel.create({
            user: req.user._id,
            productItem,
            productImage: isProduct.productImage, 
            rating
        });
        isreview.save();
        res.status(201).json({cart: isreview, message: "review added success"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
};

exports.getAllreview = async (req,res) => {
    try {
        let getAllreview = await reviewModel.find({user: req.user._id ,isDelete: false});
        res.json(getAllreview);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

exports.deletereview = async (req,res) => {
    try{
        let {reviewId} = req.body
        let reviewItem = await reviewModel.find({user: req.user._id, isDelete: false});
        reviewItem = await reviewModel.findOne({_id: reviewId, isDelete: false});
        if(!reviewItem){
            return res.json({message: "No Item In Your favourite"});
        }
        reviewItem = await reviewModel.findByIdAndUpdate(
            reviewId,
            {
                $set: {isDelete: true}
            },
            {new: true}
        )

        res.json({reviewItem, message: "review is deleted"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server Error"});
    }
};
