'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: String,
  email: String,
  books: [{type: mongoose.Schema.Types.ObjectId, ref: 'book'}],
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
