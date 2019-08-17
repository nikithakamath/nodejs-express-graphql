'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  year: Number,
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;
