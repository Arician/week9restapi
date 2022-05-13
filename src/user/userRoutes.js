const { Router } = require("express");
const { addUser, signin} = require("./userController");
const { hashPass, passcheck , validemail} = require("../middleware");
const userRouter = Router();

// http verbs for account creation and login. Delete and update seem arbitrary without working log in token
userRouter.post("/user",validemail, hashPass, addUser);
userRouter.post("/signin",passcheck,signin);

module.exports = userRouter;
