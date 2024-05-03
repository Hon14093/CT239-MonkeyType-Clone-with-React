require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

// middleware
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crabtype'
})

app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM account WHERE `email` = ? AND `password` = ?';

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json(err);
        }
        
        if (data.length > 0) {
            return res.json({
                status: "Success",
                user: {
                    id: data[0].id,
                    username: data[0].username,
                    email: data[0].email
                    // Add other user information fields as needed
                }
            });
        } else return res.json("Failed");
    })

})

app.post('/register', (req, res) => {
    const sql = 'INSERT INTO account(`id`, `username`, `email`, `password`) VALUES (?)';
    const values = [
        req.body.id,
        req.body.user_name,
        req.body.email,
        req.body.password
    ]

    db.query(sql, [values], (err, data) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                // Handle duplicate entry error (email already exists)
                return res.status(400).json({ error: 'Email already exists' });
            } else {
                // Handle other types of errors
                return res.status(500).json({ error: 'Internal server error' });
            }
        }

        // Registration successful
        return res.json({
            status: "Success",
            user: {
                id: data.insertId,
                username: req.body.user_name,
                email: req.body.email
                // Add other user information fields as needed
            }
        });
    });
})

app.post('/save', (req, res) => {
    const sql = 'INSERT INTO record(`recordID`, `id`, `mode_id`, `config_id`, `wpm`, `accuracy`, `timeTaken`, `date`) VALUES(?)';
    const values = [
        req.body.recordID,
        req.body.id,
        req.body.modeID,
        req.body.configID,
        req.body.wpm,
        req.body.accuracy,
        req.body.timeTaken,
        req.body.date
    ]

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    })
})


// SELECT r.wpm, r.accuracy, m.mode_name, c.config_name, r.date
// FROM record r
// JOIN mode m ON r.mode_id = m.mode_id
// JOIN config c ON r.config_id = c.config_id;

app.get('/record', (req, res) => {
    // const sql = 'SELECT * FROM record r WHERE r.id = (?)';
    const sql = 'SELECT r.wpm, r.accuracy, m.mode_name, c.config_name, r.timeTaken, r.date ' +
                'FROM record r ' +
                'JOIN mode m ON r.mode_id = m.mode_id ' +
                'JOIN config c ON r.config_id = c.config_id ' +
                'WHERE r.id = (?)'

    const id = req.query.id; // Access id from query parameters
    db.query(sql, id, (err, result) => { // Use req.query.id to retrieve the id
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.listen(8081, () => {
    console.log('Server is running');
})