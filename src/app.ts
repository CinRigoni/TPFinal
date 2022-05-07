import express from "express";
import http from 'http';
import dotenv from 'dotenv'

dotenv.config();
const app = express();
//import routes from "./routes/";

// ADD THIS
//var cors = require('cors');
//app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

import db from "./database/config/config";
db.sync().then(() => {
    console.log("Conectado a la Base de Datos")
}).catch(() => {
    console.log("Error al conectar Base de Datos");
});

//app.use(routes);

var server = http.createServer(app);
var port: string = process.env.PORT || '5000';

server.listen(port);
console.log('Servidor iniciado en puerto ',port);