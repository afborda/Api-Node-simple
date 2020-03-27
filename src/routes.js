const express = require("express");

const SessionController = require("./controllers/SessionController");
const ControllerMovie = require("./controllers/controllerMovie");

const routes = express.Router();

routes.get("/movies", ControllerMovie.index);
routes.get("/movies/:id", ControllerMovie.show);

routes.post("/user", SessionController.show);

module.exports = routes;
