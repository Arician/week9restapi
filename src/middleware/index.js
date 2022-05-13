const bcrypt = require("bcryptjs");
const User = require("../user/userModel");

exports.validemail=async(req, res, next) => {
    // checks if email is in the right format for an email address before moving on
    try{
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)){
            next();
        }else{
            return res.status(500).send({ message:"Invalid email address"})
        }
    }catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
}
exports.hashPass = async (req, res, next) => {
    // hash password for protection before submitting
    try {
        req.body.pass = await bcrypt.hash(req.body.pass, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    }
};
exports.passcheck=async(req, res, next) => {
    // compares entered password with stored hash value. Didn't want the checkUser here but couldn't get it to work otherwise
    try {
        const checkUser = await User.findOne({ username : req.body.username})
        if(!checkUser){
          return res.status(404).send({message:"User not found"})
        }else{
          const passvalid=bcrypt.compareSync(req.body.pass,checkUser.pass)
          if(!passvalid){
            return res.status(401).send({message:`Password incorrect for ${checkUser.username}`})
          }else{
           next();
          }}
    }catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
}