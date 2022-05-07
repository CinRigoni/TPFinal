"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cxMysql = void 0;
const mysql2_1 = require("mysql2");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.cxMysql = (0, mysql2_1.createPool)({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 100 //100 es el valor por defecto
});
exports.cxMysql.getConnection((error) => {
    if (error) {
        console.log('El erro de conexion es: ' + error);
        return;
    }
    console.log('Conectado a la base de datos!');
});
