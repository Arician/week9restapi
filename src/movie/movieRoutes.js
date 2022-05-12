const { Router } = require("express");

const { addMovie, listMovies , deleteMovie , updateMovie } = require("./movieControllers");

const movieRouter = Router();

// use http verb post to add data to our movie endpoint
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.delete("/movie", deleteMovie);
movieRouter.patch("/movie", updateMovie);

module.exports = movieRouter;