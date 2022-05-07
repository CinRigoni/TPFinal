"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
//import routes from "./routes/instrumento";
// ADD THIS
//var cors = require('cors');
//app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const config_js_1 = require("./database/config/config.js");
config_js_1.cxMysql.getConnection;
//app.use(routes);
var server = http_1.default.createServer(app);
var port = process.env.PORT || '5000';
server.listen(port);
console.log('Servidor iniciado en puerto ', port);
