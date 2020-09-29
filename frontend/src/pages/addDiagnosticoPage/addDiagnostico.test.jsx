import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {ApolloClient, createHttpLink, InMemoryCache, ApolloProvider} from '@apollo/client'
import {setContext} from '@apollo/client/link/context';
import ShallowRenderer from 'react-test-renderer/shallow';

import DiagnosticPage from './addDiagnosticoPage';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

const authLink = setContext((_, { headers }) => {
  let {auth} = store.getState() 
  return {
    headers: {
      ...headers,
      authorization: auth.token ? `${auth.token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})


test('renders the diagnosticPage', async () => {
  const renderer = new ShallowRenderer();
  await act(async () => renderer.create(
    <ApolloProvider client={client}>
      <Router>
        <DiagnosticPage 
      reportNumber='5f6198cc332a83188043b2f3'
        />
      </Router>
  </ApolloProvider>)
  );
  const result = renderer.getRenderOutput();

  console.log(result)
});
