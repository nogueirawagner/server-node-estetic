'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Carrega os modelos
const example_model = require('./models/example');
const categoria_model = require('./models/categoria');
const servico_model = require('./models/servico');

// Conexao com banco
mongoose.connect(config.connectionString);

// Carrega as Rotas
const index_route = require('./routes/index-route');
const example_route = require('./routes/example-route');
const categoria_route = require('./routes/categoria-route');
const servico_route = require('./routes/servico-route');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Add as rotas ao app.
//app.use('/', index_route);

//chamando a view. ## GAMBIARRA
app.use('/', express.static(__dirname + '/views'));

app.use('/example', example_route);
app.use('/categoria', categoria_route);
app.use('/servico', servico_route);



module.exports = app;