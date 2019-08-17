'use strict';

let User = require('../model/user');
let Book = require('../model/book');

const resolver = {
    getUserProfile: ({userID}) => {
      return new Promise((resolve, reject) => {
        User.findById(userID).populate('books').exec()
          .then((userData) => {
            resolve(userData);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getAllBooks: () => {
      return new Promise((resolve, reject) => {
        Book.find({})
        .then((bookList) => {
          resolve(bookList)
        })
        .catch((error) => {
          reject(error);
        });
      });
    },
    getBook: ({bookID}) => {
      return new Promise((resolve, reject) => {
        Book.findOne({_id: bookID})
        .then((book) => {
          resolve(book);
        })
        .catch((error) => {
          reject(error);
        });
      });
    },
    createBook: ({input}) => {
      return new Promise((resolve, reject) => {
        let bookObj = new Book({
          title: input.title,
          author: input.author,
          year: input.year,
        });
        bookObj.save()
          .then((savedData) => {
            resolve(savedData)
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    createUser: ({input}) => {
      return new Promise((resolve, reject) => {
        let userObj = new User({
          userName: input.userName,
          email: input.email,
        });
        userObj.save()
          .then((savedData) => {
            resolve(savedData)
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addBookForUser: ({bookID, userID}) => {
      return new Promise((resolve, reject) => {
        let bookData;
        Book.findOne({_id: bookID})
          .then((book) => {
            bookData = book;
            return User.findOneAndUpdate({_id: userID}, {$push: {books: bookData}}, {new: true});
          })
          .then((updateData) => {
            resolve(updateData);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    removeBookForUser: ({bookID, userID}) => {
      return new Promise((resolve, reject) => {
        User.findOneAndUpdate({_id: userID}, {$pull: {books: bookID}}, {new: true})
          .then((updateData) => {
            resolve(updateData);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
};

module.exports.resolver = resolver;
