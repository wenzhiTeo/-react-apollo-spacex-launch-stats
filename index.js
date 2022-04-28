const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./shcema');
const app =express();

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000);