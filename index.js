const express = require('express');
const mongoose = require('mongoose');
const schema = require('./models/schema');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

//mongoDB connection 
const url = "mongodb://localhost:27017/moviesdb";
const connect = mongoose.connect(url, { useNewUrlParser: true });
connect.then((db) => {
      console.log('Connected correctly to server!');
}, (err) => {
      console.log(err);
});

// mongoose.connection.on('error', (err)=>{
//     console.log("Error connecting to dataBase MongoDB!!!"+err);
// })
const server = new ApolloServer({
      typeDefs: schema.typeDefs,
      resolvers: schema.resolvers
});
const app = express();
app.use(bodyParser.json());
app.use('*', cors());
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));