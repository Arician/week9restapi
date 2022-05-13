const { Router } = require("express");

const { addMovie, listMovies , deleteMovie , updateMovie } = require("./movieControllers");

const movieRouter = Router();

// http verbs get for adding data, post for reading, patch/put to update and delete for delete. This completes the CRUD
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.delete("/movie", deleteMovie);
movieRouter.patch("/movie", updateMovie);

module.exports = movieRouter;