const cartmodel = require('../../model/cart.model');

exports.showAllcart =  async (req , res)=> {
    try {
        let allCart = await cartmodel.find({isDelete: false});
        res.json(allCart);

    }catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server eroor"}
        )
    }
}

exports.specificcart = async (req,res) => {
    try {
        const {cartItem} = req.body;
        let cart = await cartmodel.findOne({_id: cartItem, isDelete: false});
        if(!cart){
            return res.json({message:"This cart Is Not Found!"})
        }
        res.json(cart);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
}