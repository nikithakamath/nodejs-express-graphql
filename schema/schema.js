let {buildSchema} = require('graphql');

const schema = buildSchema(`
    type User {
        userID: String!
        userName: String!
        email: String!
        books: [Book]
    }
    type Book {
        bookID: String!
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
        addBookForUser(bookID: String!, userID: String!) : [Book]
        removeBookForUser(bookID: String!, userID: String!) : [Book]
    }
`);

module.exports.schema = schema;
