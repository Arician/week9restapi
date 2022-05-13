const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
    // adds a movie to the db
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({ movie: newMovie})
    }   catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};

exports.listMovies = async (req, res) => {
    // read the movie database
    try {
        const movies = await Movie.find({});
        res.status(200).send({ movies });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};
exports.updateMovie = async (req, res) => {
    // updates the movie from db
    try {
        const movies = await Movie.updateOne(
            {title: req.body.title},
            {$set: {actors: req.body.actors}}
        );
        res.status(200).send({ movies });
    }catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
}
exports.deleteMovie = async (req, res) => {
    // deletes a movie from db
    try {
        const movies = await Movie.deleteOne(req.body);
        res.status(200).send({ movies });
    }catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
}