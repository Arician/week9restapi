const User = require("./userModel");
const bcrypt = require("bcryptjs");

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send({ user: newUser.username });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
exports.signin= async (req, res) => {
  try {
    const checkUser = await User.findOne({ username : req.body.username})
    if(!checkUser){
      return res.status(404).send({message:"User not found"})
    }else{
      const passvalid=bcrypt.compareSync(req.body.pass,checkUser.pass)
      if(!passvalid){
        return res.status(401).send({message:`Password incorrect for ${checkUser.username}`})
      }else{
       return res.status(200).send({message:"This is where I'd provide a log in token, apparently to cookies?"})
      }}
  }catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
}
exports.listuser = async (req, res) => {
  try {
      const movies = await User.find({});
      res.status(200).send({ movies });
  } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message })
  }
};
