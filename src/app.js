'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Carrega os modelos
const example_model = require('./models/example');

// Conexao com banco
mongoose.connect(config.connectionString);

// Carrega as Rotas
const index_route = require('./routes/index-route');
const example_route = require('./routes/example-route');


app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, x-access-token');
    res.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Add as rotas ao app.
app.use('/', index_route);
app.use('/example', example_route);

module.exports = app;