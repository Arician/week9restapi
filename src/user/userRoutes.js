const { Router } = require("express");
const { addUser, signin ,listuser} = require("./userController");
const { hashPass, passcheck } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.post("/signin",signin);
userRouter.get("/user",listuser)

module.exports = userRouter;
