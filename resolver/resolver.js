let {staticData} = require('../model/staticData');
let userData = staticData.Users;
let bookData = staticData.Books;
let userBookData = staticData.UserBooks;
let _ = require('lodash');

const resolver = {
    getUserProfile: ({userID}) => {
        let result = userData.find(user => user.userID === userID);
        if(result) {
            result.books = userBookData[userID] ? userBookData[userID] : [];
        }
        return result;
    },
    getAllBooks: () => {
        return bookData;
    },
    getBook: ({bookID}) => {
        return bookData.find(book => book.bookID === bookID);
    },
    createBook: ({input}) => {
        let bookObj = {
            bookID: 'book_' + (bookData.length + 1),
            title: input.title,
            author: input.author,
            year: input.year,
        };
        bookData.push(bookObj);
        return bookObj;
    },
    createUser: ({input}) => {
        let userObj = {
            userID: 'user_' + (userData.length + 1),
            userName: input.userName,
            email: input.email,
        };
        userData.push(userObj);
        return userObj;
    },
    addBookForUser: ({bookID, userID}) => {
        let bookObj = bookData.find(book => book.bookID === bookID);
        if(userBookData[userID]) {
            // User already has books
            userBookData[userID].push(bookObj);
        } else {
            // User does not have books
            userBookData[userID] = [bookObj];
        }
        return userBookData[userID];
    },
    removeBookForUser: ({bookID, userID}) => {
        let userBookList = userBookData[userID];
        _.remove(userBookList, (userBook) => {
            return userBook.bookID === bookID;
        });
        return userBookList;
    }
};

module.exports.resolver = resolver;
