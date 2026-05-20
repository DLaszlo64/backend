const express = require('express')
const mysql  = require('mysql2/promise')
require('dotenv').config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 8080


const dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})
