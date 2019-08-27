import React from 'react';
import ApolloClient from 'Apollo-boost'
import { ApolloProvider } from 'react-apollo'

import BookList from './components/BookList'

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Will's Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
