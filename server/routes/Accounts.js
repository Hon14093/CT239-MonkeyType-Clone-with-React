const router = require('express').Router();
const { AccountModel, validate } = require('../models/Account')
const bcrypt = require('bcrypt');

console.log('Running')

router.post('/', async (req, res) => {
    try {
        const error = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const account =  await AccountModel.findOne({ email: req.body.email });
        if (account)
            return res.status(409).send({ message: "User already exist!" });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new AccountModel({...req.body, password: hashPassword}).save();
        res.status(201).send({ message: "User created successfully!" })

    } catch (err) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})

module.exports = router;