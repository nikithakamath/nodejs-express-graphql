let express = require('express');
let graphqlHTTP = require('express-graphql');

let app = express();
let port = 8080;

let {schema} = require('./schema/schema');
let {resolver} = require('./resolver/resolver');

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
}));

app.listen(port, (err) => {
    if(!err) {
        console.log(`App is running on port ${port}`);
        console.log(`Please goto http://localhost:${port}/graphql`);
    } else {
        console.log(`Port ${port} is already used`);
    }
});