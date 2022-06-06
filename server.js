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

  const publicPath = path.join(__dirname, "..", "public");
  app.use(express.static(publicPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });

  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
