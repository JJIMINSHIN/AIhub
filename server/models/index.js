const mongoose = require('mongoose');
const UserSchema = require('./Schemas/User');

exports.User = mongoose.model('User', UserSchema)