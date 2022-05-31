var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/bebidas', require('./routes/RutasBebidas'));
app.use('/api/rubroInsumo', require('./routes/RutasRubroInsumo'));
app.use('/api/rubroGeneral', require('./routes/RutasRubroGeneral'));
app.use('/api/roles', require('./routes/RutasRoles'));
app.use('/api/articuloInsumo', require('./routes/RutasArticuloInsumo'));

var http = require('http');
var server = http.createServer(app);

var port = process.env.PORT || '5000';

const db = require('./database/config/db').sequelize;

server.listen(port);
console.log('Servidor iniciado en puerto ', port);


