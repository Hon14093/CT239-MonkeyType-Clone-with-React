const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');  // Using jsonwebtoken library
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const AccountSchema = new mongoose.Schema({
    user_name: String,
    email: String,
    password: String
})

AccountSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_PRIVATE_KEY, {expiresIn: "3d"});
    console.log(token);
    localStorage.setItem(token, token);
    return token;
}

const AccountModel = mongoose.model("accounts", AccountSchema);

const validate = (data) => {
    const schema = joi.object({
        user_name: joi.string().required().label("user_name"),
        email: joi.string().email().required().label("email"),
        password: passwordComplexity().required().label("password")
    });
    console.log('Validate account');
    return schema.validate(data);
}

module.exports = {AccountModel, validate};