const mongoose = require("mongoose");
module.exports = () => {
    try {
        mongoose.connect(process.env.DB);
        console.log("Connected to database successfully");
    } catch (err) {
        console.log(err);
        console.log("Could not connect to database");
    }
}