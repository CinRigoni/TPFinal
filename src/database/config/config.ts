import dotenv from 'dotenv'
dotenv.config();

import { Sequelize } from 'sequelize';
const db = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  dialect: 'mysql'
})

export default db;