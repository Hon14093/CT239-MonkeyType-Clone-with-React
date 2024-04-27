require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
// const {AccountModel} = require('./models/Account');

const accountRoutes = require('./routes/Accounts');
const authRoutes = require('./routes/Auth');

const { AccountModel, validate } = require('./models/Account')
const bcrypt = require('bcrypt');


// middleware
app.use(express.json());
app.use(cors());

// connect to mongodb
connection();

// routes
// app.use('/api/accounts', accountRoutes);
// app.use('/api/auth', authRoutes);

// app.use('/register', accountRoutes);
app.use('/api/auth', authRoutes);


app.post('/login', (req, res) => {
    const {email, password} = req.body;

    AccountModel.findOne({email: email})
    .then(user => {
        if (user) {
            if (user.password === password) {
                res.json({
                    status: "Success",
                    user: {
                        username: user.user_name,
                        email: user.email
                        // Add other user information fields as needed
                    }
                })

            } else {
                res.json("The passwords do not match")
            }
        } else {
            res.json("User does not exist")
        }
    })
})

app.post('/register', (req, res) => {
    AccountModel.create(req.body)
    .then(accounts => res.json({
        account: accounts,
        user: {
            username: accounts.user_name,
            email: accounts.email
        }
    }))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('Server is running');
})