const dataMovies = require("../mock/MockMovies");

module.exports = {
  index(req, res) {
    return res.json(dataMovies);
  },

  show(req, res) {
    console.log(req.params);
    const { id } = req.params;
    const movie = dataMovies.filter(item => item.imdbID == id);
    res.json(movie);
  },
  filterCategory(req, res) {
    const movieFilter = req.body;
    const movies = dataMovies.filter(
      item => item.category === movieFilter.category
    );
    return res.json(movies);
  }
};
