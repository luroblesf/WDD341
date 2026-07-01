const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.luciaRoute);
routes.get('/astrid', lesson1Controller.astridRoute);

module.exports = routes;