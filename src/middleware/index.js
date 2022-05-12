const bcrypt = require("bcryptjs");
const User = require("../user/userModel");

exports.hashPass = async (req, res, next) => {
    try {
        req.body.pass = await bcrypt.hash(req.body.pass, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    }
};
exports.passcheck=async(req, res, next) => {
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