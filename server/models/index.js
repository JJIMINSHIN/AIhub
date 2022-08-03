const mongoose = require('mongoose');
const UserSchema = require('./schemas/User');

exports.User = mongoose.model("User", UserSchema)