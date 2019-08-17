'use strict';

let {buildSchema} = require('graphql');

const schema = buildSchema(`
    type User {
        _id: ID!,
        userName: String!
        email: String!
        books: [Book]
    }
    type Book {
        _id: ID!,
        title: String!
        author: String!
        year: Int!
    }
    input BookInput {
        title: String!
        author: String!
        year: Int!
    }
    input UserInput {
        userName: String!
        email: String!
    }
    type Query {
        getUserProfile(userID: String!): User
        getAllBooks: [Book]
        getBook(bookID: String!): Book
    }
    type Mutation {
        createBook(input: BookInput): Book
        createUser(input: UserInput): User
        addBookForUser(bookID: String!, userID: String!) : User
        removeBookForUser(bookID: String!, userID: String!) : User
    }
`);

module.exports.schema = schema;
