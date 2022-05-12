const { Router } = require("express");
const { addUser, signin} = require("./userController");
const { hashPass, passcheck , validemail} = require("../middleware");
const userRouter = Router();

userRouter.post("/user",validemail, hashPass, addUser);
userRouter.post("/signin",passcheck,signin);

module.exports = userRouter;
