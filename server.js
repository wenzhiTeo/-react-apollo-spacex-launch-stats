const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolver");

const express = require("express");
const path = require("path");

const app = express();
const server = new ApolloServer({ typeDefs, resolvers, csrfPrevention: true });
const PORT = process.env.PORT || 4000;

server.start().then((res) => {
  server.applyMiddleware({ app, cors: true });

  app.use(express.static('public'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
  
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
