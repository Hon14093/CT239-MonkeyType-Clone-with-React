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
            return res.json({
                status: "Success",
                user: {
                    username: data[0].username,
                    email: data[0].email
                    // Add other user information fields as needed
                }
            });
        }
        return res.json(data);
    })

    // AccountModel.create(req.body)
    // .then(accounts => res.json({
    //     account: accounts,
    //     user: {
    //         username: accounts.user_name,
    //         email: accounts.email
    //     }
    // }))
    // .catch(err => res.json(err))
})

app.listen(8081, () => {
    console.log('Server is running');
})