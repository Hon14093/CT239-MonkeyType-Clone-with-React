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
                    id: data[0].account_id,
                    username: data[0].username,
                    email: data[0].email,
                    joinedDate: data[0].joinedDate
                    
                }
            });
        } else  {
            // Account does not exist
            return res.json({
                status: "Failed",
                message: "Wrong email or password"
            });
        }
    });

})

app.post('/register', (req, res) => {
    const sql = 'INSERT INTO account(`account_id`, `username`, `email`, `password`, `joinedDate`) VALUES (?)';
    const values = [
        req.body.id,
        req.body.user_name,
        req.body.email,
        req.body.password,
        req.body.joinedDate
    ]

    db.query(sql, [values], (err, data) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                // Handle duplicate entry error (email already exists)
                return res.status(400).json({ error: 'Account already exists' });
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
    const sql = 'INSERT INTO record(`recordID`, `account_id`, `mode_id`, `config_id`, `vd_id`, `wpm`, `accuracy`, `timeTaken`, `date`) VALUES(?)';
    const values = [
        req.body.recordID,
        req.body.accountID,
        req.body.modeID,
        req.body.configID,
        req.body.vd_id,
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
// ORDER BY r.date DESC

app.get('/record', (req, res) => {
    // const sql = 'SELECT * FROM record r WHERE r.id = (?)';
    const sql = 'SELECT r.wpm, r.accuracy, m.mode_name, c.config_name, v.vd_name, r.timeTaken, r.date ' +
                'FROM record r ' +
                'JOIN mode m ON r.mode_id = m.mode_id ' +
                'JOIN config c ON r.config_id = c.config_id ' +
                'JOIN vocab_difficulty v ON v.vd_id = r.vd_id ' +
                'WHERE r.account_id = (?) ' +
                'ORDER BY r.date DESC'

    const id = req.query.id; // Access id from query parameters
    db.query(sql, id, (err, result) => { // Use req.query.id to retrieve the id
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get('/stat', (req, res) => {
    const sql = 'SELECT COUNT(*) as completedTests, AVG(wpm) as average, SUM(timeTaken) as timeTyping ' +
                'FROM record r WHERE r.account_id = (?)'

    const id = req.query.id;
    db.query(sql, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

// SELECT config_id, MAX(wpm) AS highest_wpm
// FROM record
// WHERE config_id IN ('CF0001', 'CF0002', 'CF0003', 'CF004')
// AND id = "3UdmVKFpSv"
// GROUP BY config_id;

app.get('/time', (req, res) => {
    const sql= `SELECT config_id, MAX(wpm) AS highest_wpm,
                    (SELECT accuracy FROM record AS r2
                    WHERE r2.config_id = r.config_id
                    AND r2.wpm = (SELECT MAX(wpm) FROM record AS r3
                                    WHERE r3.config_id = r.config_id)
                    ) AS highest_acc
                FROM record AS r
                WHERE config_id IN ('CF0001', 'CF0002', 'CF0003', 'CF0004')
                AND account_id = ?
                GROUP BY config_id`;

    const id = req.query.id;
    db.query(sql, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

// SELECT config_id, 
//        MAX(wpm) AS highest_wpm,
//        (SELECT accuracy FROM record AS r2
//         WHERE r2.config_id = r.config_id
//           AND r2.wpm = (SELECT MAX(wpm) FROM record AS r3
//                        WHERE r3.config_id = r.config_id)
//        ) AS highest_acc
// FROM record AS r
// WHERE config_id IN ('CF0001', 'CF0002', 'CF0003', 'CF0004')
// AND id = "3UdmVKFpSv"
// GROUP BY config_id

app.get('/words', (req, res) => {
    const sql= `SELECT config_id, MAX(wpm) AS highest_wpm,
                    (SELECT accuracy FROM record AS r2
                    WHERE r2.config_id = r.config_id
                    AND r2.wpm = (SELECT MAX(wpm) FROM record AS r3
                                    WHERE r3.config_id = r.config_id)
                    ) AS highest_acc
                FROM record AS r
                WHERE config_id IN ('CF0005', 'CF0006', 'CF0007', 'CF0008')
                AND account_id = ?
                GROUP BY config_id`;

    const id = req.query.id;
    db.query(sql, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get('/quote', (req, res) => {
    const sql= `SELECT config_id, MAX(wpm) AS highest_wpm,
                    (SELECT accuracy FROM record AS r2
                    WHERE r2.config_id = r.config_id
                    AND r2.wpm = (SELECT MAX(wpm) FROM record AS r3
                                    WHERE r3.config_id = r.config_id)
                    ) AS highest_acc
                FROM record AS r
                WHERE config_id IN ('CF0009', 'CF0010', 'CF0011', 'CF0012')
                AND account_id = ?
                GROUP BY config_id`;

    const id = req.query.id;
    db.query(sql, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.post('/validatePW', (req, res) => {
    const sql = 'SELECT password FROM account WHERE `email` = ?';

    db.query(sql, req.body.email, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.post('/passwordChange', (req, res) => {
    const sql = '';


})

app.listen(8081, () => {
    console.log('Server is running');
})