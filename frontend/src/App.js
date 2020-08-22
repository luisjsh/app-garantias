import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

import LandingPage from './pages/landingpage/landingpage'
import Homepage from './pages/homepage/homepage'
import SignUp from './pages/signup/signup'
import LogIn from './pages/loginpage/login'



const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/login' component={LogIn}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route path='/app/homepage' component={Homepage}/>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
