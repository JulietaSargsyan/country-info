import React from 'react';
import SearchBar from './components/SearchBar';
import './app.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";;








const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com/"
})



function App() {
    return (
      <ApolloProvider client={client}>
          <div className='main-container'>
            <SearchBar />
          </div>
      </ApolloProvider>
    )
}

export default App;



