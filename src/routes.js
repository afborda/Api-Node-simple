const express = require("express");

const SessionController = require("./controllers/SessionController");
const ControllerMovie = require("./controllers/controllerMovie");

const routes = express.Router();

routes.post("/user", SessionController.show);

routes.get("/movies", ControllerMovie.index);
routes.post("/movies", ControllerMovie.filterCategory);
routes.get("/movies/:id", ControllerMovie.show);

module.exports = routes;
