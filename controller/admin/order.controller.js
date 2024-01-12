const ordermodel = require('../../model/order.model');

exports.showAllorder = async (req , res)=>{
    try {
        let allOrder = await ordermodel.find({isDelete: false});
        res.json(allOrder);
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server eroor"})
    }
}

exports.specificorder = async (req,res)=>{
    try{
        const{orderItem} = req.body;
        let order = await ordermodel.findOne({_id: orderItem, isDelete: false});
        if(!order){
            return res.json({message:"This order is not found "})
        }
        res.json(order);
        }catch (err){
        console.log(err);
        res.status(500).json({message: " internal server eroor"})
    }
}