const User = require('../../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const usermodel = require('../../model/user.model');

exports.Signup = async (req, res) => {
try {
const {name ,email ,password ,confirmpassword  , isAdmin } = req.body; 
let user = await usermodel.findOne({ Email: email, isDelete: false }); 
if (user) {
    return res.json({ message: 'User is already exist...' });
}
let hashPassword = await bcrypt.hash (password, 10);
console.log(hashPassword);
user = await User.create({
    name , email , 
    password : hashPassword,
    confirmpassword  , isAdmin 
    
});
    user.save();
    res.status(201).json({ user, message: 'User is added' });
}
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.login = async (req, res) => {
    try {
    const { email, password } = req.body;
    let user = await User.findOne({ email : email, isDelete: false }); 
    if (!user) {
        return res.json({ message: 'User is not found' });
    }
    let checkPassword = await bcrypt.compare(password, user.password);
    if(!checkPassword){
        return res.json({message: 'Password is not matched'});
    }
    let payload = {
        userid : user._id
    }
    let token = jwt.sign(payload,process.env.SECRET_KEY); //{expiresin: "10 min"}
    // console.log(token);
    res.status(200).json({token, message : 'login sucess'});
    }
    catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'Internal Server Error' });
    }
    };

    exports.getuser = async(req, res) => { 
        try{
            // console.log(req.user);
            res.json(req.user);
        }
        catch(error){
            console.log(error);
            res.status(500).json({message: 'Internal Server Errorr'});
        }
    };

    exports.updateuser = async (req, res) => {
        try {
         let user = await User.findByIdAndUpdate(req.user._id,{ $set: { ...req.body }},{new: true})
          res.status(200).json({ user , Message: "User is update...." });
        } catch (err) {
          console.log(err);
          res.status(500).json({ Message: "Internal Server errrer...." });
        }
      };

      exports.chagePassword = async (req,res) => {
        const { currentpassword, newpassword, confirmpassword} = req.body;
      
        let checkPassword = await bcrypt.compare(currentpassword, req.user.password);
        if(!checkPassword){
            return res.json({message:"your Password is wrong."})
        }
        if(newpassword !== confirmpassword){
            return res.json({message:"Your new password and confirm password are different."})
        }
        let hashedPassword = await bcrypt.hash(confirmpassword, 10);
        let user = await User.findByIdAndUpdate(
            req.user._id,
            {
                $set: {"password": hashedPassword,
                "confirmpassword": confirmpassword }
            },
            {new: true}
        )
        user.save();     
        res.json({user, message: "successfully change the password"});
      }

      exports.deleteuser = async (req, res) => {
        try {
          let user = await User.findByIdAndDelete(req.user._id,
            { 
                $set: {isDelete: true}
            }); 
          res.json({user, Message: "User is delete...." });
        } catch (err) {
          console.log(err);
          res.status(500).json({ Message: "Internal Server errrer...." });
        }
      };
    