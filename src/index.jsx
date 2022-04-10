import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql', // URL of the GraphQL server.
  cache: new InMemoryCache(), // used to cache query results after fetching them.
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
