const router = require('express').Router();
const { AccountModel } = require('../models/Account');
const joi = require('joi');
const bcrypt = require('bcrypt');

router.post('/api/auth', async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
            
        const account = await AccountModel.findOne({ email: req.body.email });
        if (!account) {
            return res.status(401).send({ message: "Invalid Email" });
        }
            
        const validPassword = await bcrypt.compare(req.body.password, account.password);
        if (!validPassword) {
            return res.status(401).send({ message: "Invalid Password" });
        }

        const token = account.generateAuthToken();
        res.status(200).send({ data: token, message: "Login successfully!" });

    } catch (err) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})

const validate = (data) => {
    const schema = joi.object({
        email: joi.string().email().required().label('email'),
        password: joi.string().required().label('password')
    });
    return schema.validate(data);
}

module.exports = router;