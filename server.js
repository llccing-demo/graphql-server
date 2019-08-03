var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query{
    message: String,
    data: [String!],
  }
`)

var root = {
  message: () => 'Hello World!',
  data: ()=>[1,2,3,4,6]
}

var app = express();
app.use('/graphql', express_graphql({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));