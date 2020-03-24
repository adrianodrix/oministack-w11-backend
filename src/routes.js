const express = require('express');
const routes = express.Router();

const ONGController = require('./controllers/ONGController');
const IncidentController = require('./controllers/IncidentController');

routes.get('/ongs', ONGController.index);
routes.post('/ongs', ONGController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;