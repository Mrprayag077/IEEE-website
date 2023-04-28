const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email_id: String,
    password: String,
    idser: String,
    heading: String,
    category: String,
    img1: String,
    body: String,
    Datee: Date

})

module.exports = mongoose.model("users", userSchema);
