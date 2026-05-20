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

app.get('/ping', async (req, res) =>{
    try {
        const [rows] = await dbPool.query('SELECT 1 + 1 AS solution');
        res.json({ message: 'Sikeres adatbázis kapcsolat!', result: rows[0].solution });
      } catch (error) {
        console.error('Hiba az adatbázis-kapcsolat során:', error);
        res.status(500).json({ message: 'Hiba az adatbázis-kapcsolat során.' });
      }
    
})

app.get('/api/users', async (req, res) => {
    try {
        const query = "SELECT id, name, email, created_at FROM users";
        const [rows] = await dbPool.query(query);
        res.json(rows);
    } catch (error) {
        console.error("Hiba a lekérdezés során: ", error);
        res.status(500).json({ error: 'Adatbázis hiba történt a lekérdezéskor.' });
    }
});
