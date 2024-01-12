const { mongoose } = require('mongoose');
const favouriteModel = require('../../model/favourite.model');
const productModel = require('../../model/product.model');

exports.addToFavorite = async (req, res) => {
    try {
        const { productItem } = req.body;
        let isFavorite = await favouriteModel.findOne({ productItem: productItem, user: req.user._id });

        if (isFavorite) {
            return res.json("This item is already in your Favorites");
        }
        let isProduct = await productModel.findOne({ _id: productItem, isDelete: false });

        if (!isProduct) {
            return res.send({ message: "You don't have this Product" });
        }
        isFavorite = await favouriteModel.create({
            user: req.user._id,
            productItem,
            productImage: isProduct.productImage, 
            productName: isProduct.productName, 
            productPrice: isProduct.productPrice, 
        });
        isFavorite.save();
        res.status(201).json({ favorite: isFavorite, message: "Item added to favorites successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getallFavourite = async (req,res) => {
    try {
        let allFavourite = await favouriteModel.find({user: req.user._id ,isDelete: false});
        res.json(allFavourite);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

// exports.getfavourite = async(req, res)=>{
//     try {
//         let id = new mongoose.Types.ObjectId(req.query.productid);
//         let favouriteItem = await favouriteModel.findById(id);
//         if(!favouriteItem)
//         {
//             return res.json({message: 'favourite not found'});
//         }
//         res.status(200).json(favouriteItem);
//     } catch(err){
//         console.log(err);
//         res.status(500).json({message: "Internal Server Error"});
//     }
// };

exports.deleteFavourite = async (req,res) => {
    try{
        let {favouriteId} = req.body
        let favouriteItem = await favouriteModel.find({user: req.user._id, isDelete: false});
        favouriteItem = await favouriteModel.findOne({_id: favouriteId, isDelete: false});
        if(!favouriteItem){
            return res.json({message: "No Item In Your favourite"});
        }
        favouriteItem = await favouriteModel.findByIdAndUpdate(
            favouriteId,
            {
                $set: {isDelete: true}
            },
            {new: true}
        )

        res.json({favouriteItem, message: "favourite is deleted"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server Error"});
    }
};




















