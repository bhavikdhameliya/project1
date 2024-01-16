const reviewModel = require('../../model/review.model');

exports.showAllreview = async (req,res) => {
    try {
        let allreview = await reviewModel.find({isDelete: false});
        res.json(allreview);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
}