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


db.connect((err) => {
    if (err) {
        console.error('Error Connection to database:'+ err.stack);
        return;
    }
    console.log('Connected succesfully.');
})

app.get('api/users', (req, res) => {
   db.query('SELECT * FROM users', (err, results) => {
       if (err) {
           console.error('Error executing query: ' + err.stack);
           res.status(500).send('Error fetching users');
           return;
       } 
       res.json(results);
    })
})

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;

    if (!nama || !nim || !kelas) {
        return res.status(400).json({message: "Nama, NIM, dan Kelas wajib diisi."}); 
    }

    db.query(
        "INSERT INTO users (nama, nim, kelas) VALUES (?, ?, ?)", 
    [nama, nim, kelas], 
    (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({message: "Database error"});
        }
        res.status(201).json({message: "Data berhasil ditambahkan"});
    }
    );
});