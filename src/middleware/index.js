const bcrypt = require("bcryptjs");

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
          const passvalid=bcrypt.compareSync(req.body.password,User.password)
          next()
    }catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
}