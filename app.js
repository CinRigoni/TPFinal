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

var http = require('http');
var server = http.createServer(app);

var port = process.env.PORT || '5000';

const db = require('./database/config/db');
db();

server.listen(port);
console.log('Servidor iniciado en puerto ', port);


