const express = require('express');
let mysql = require('mysql2');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
}) 

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Telagasari15',
    database: 'biodata',
    port: 3307 //sesuaikan sama port mysql masing-masing
})

