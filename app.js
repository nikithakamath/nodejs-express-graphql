'use strict';

let express = require('express');
let graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

let app = express();
let port = 8080;

let {schema} = require('./schema/schema');
let {resolver} = require('./resolver/resolver');

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
}));

mongoose.connect('mongodb://localhost/graphql-db', {useNewUrlParser: true});
mongoose.connection.on('connected', () => {
  console.log('MongoDB connection successful');

  app.listen(port, (err) => {
      if(!err) {
          console.log(`App is running on port ${port}`);
          console.log(`Please goto http://localhost:${port}/graphql`);
      } else {
          console.log(`Port ${port} is already used`);
      }
  });
}).on('error', (error) => {
  console.log('MongoDB connection failed due to the error: ', error);
}).on('disconnected', () => {
  console.log('MongoDB connection disconnected');
});
