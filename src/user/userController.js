const User = require("./userModel");

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
    res.status(200).send({message:"This is where I apply a log in token?"})
  }catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
}

