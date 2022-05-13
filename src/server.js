require("./db/connection");
const express = require("express");
const movieRouter = require("./movie/movieRoutes");
const userRouter = require("./user/userRoutes");

const app = express();
// port 5000 used as it is often free
const port = process.env.PORT || 5000;

// routes set up for movieRoutes.js and userRoutes.js
app.use(express.json());

app.use(movieRouter);

app.use(userRouter);

// console log so I know it's running
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});