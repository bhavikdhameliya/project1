const User = require('../../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const usermodel = require('../../model/user.model');

exports.Signup = async (req, res) => {
try {
const {name ,email ,password ,confirmpassword  , isAdmin } = req.body; 
let user = await usermodel.findOne({ Email: email, isDelete: false }); 
if (user) {
    return res.json({ message: 'admin is already exist...' });
}
let hashPassword = await bcrypt.hash (password, 10);
console.log(hashPassword);
user = await User.create({
    name , email , 
    password : hashPassword,
    confirmpassword  , isAdmin 
    
});
    user.save();
    res.status(201).json({ user, message: 'admin is added' });
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
