const { Router } = require("express");
const { addUser, signin} = require("./userController");
const { hashPass, passcheck } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.post("/signin",passcheck,signin);

module.exports = userRouter;
