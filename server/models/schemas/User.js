const { Schema } = require('mongoose');
const shortId = require('./type/short');

module.exports = new Schema({
    shortId,
    email: String,
    password : String,
    name : String,
    status : Boolean
}, {
    timestamps: true
});