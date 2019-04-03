const http = require('http');
const app = require('express')();
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const typeDefs = require('./schemas/types');
const mutations = require('./schemas/mutations');
const queries = require('./schemas/queries');
const subscriptions = require('./schemas/subscriptions');
const path = require('path')

app.use(cors());

const resolvers = {
  Query: queries,
  Mutation: mutations,
  Subscription: subscriptions,
};
// we need to add auth & websocket to subscriptions
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
})

app.get('/dist/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/bundle.js'))
})

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
})

httpServer.listen(4000, (err) => {
  if (err) throw err;
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  console.log(`Subscriptions ready at ws://localhost:4000${server.subscriptionsPath}`);
});
