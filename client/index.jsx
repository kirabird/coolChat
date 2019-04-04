import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { BrowserRouter } from 'react-router-dom';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import App from './App';

const wsLink = new WebSocketLink({
  //uri: 'ws://192.168.10.139:4000/graphql',
  uri: 'ws://localhost:4000/graphql',
  options: {
    reconnect: true
  }
});

const cache = new InMemoryCache();
const httpLink = new HttpLink({
  // uri: 'http://192.168.10.139:4000/graphql',
  uri: 'http://localhost:4000/graphql'
});

// queries and mutations go over http and subscriptions over websockets
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    console.log('KIND, ', kind, 'OPERATION', operation);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache,
  link
});

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.querySelector('#root')
);
