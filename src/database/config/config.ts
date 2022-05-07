import {createPool} from 'mysql2'
import dotenv from 'dotenv';
dotenv.config();

export const cxMysql = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 100 //100 es el valor por defecto
  });

cxMysql.getConnection((error)=>{
    if(error){
        console.log('El erro de conexion es: '+error);
        return;
    }
    console.log('Conectado a la base de datos!');
});