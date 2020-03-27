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
  }
};
