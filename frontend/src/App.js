import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import {ApolloClient, createHttpLink, InMemoryCache, ApolloProvider} from '@apollo/client'
import {setContext} from '@apollo/client/link/context';
import styled from 'styled-components'

import store from './redux/store'

import Navbar from './components/navbar/navbar'

import ChangePassword from './pages/changepasswordpage/changepassword'
import LandingPage from './pages/landingpage/landingpage'
import Homepage from './pages/homepage/homepage'
import SignUp from './pages/signup/signup'
import LogIn from './pages/loginpage/login'
import UserProfile from './pages/userprofilepage/userprofilepage'
import AddReport from './pages/addreportpage/addreportpage'
import ReportPage from './pages/reportpage/reportpage'
import UsersPage from './pages/userspage/userspage'
import AddDiagnostico from './pages/addDiagnosticoPage/addDiagnosticoPage'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

const Page = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`

const InnerPage = styled.div `
  width: 1368px;
`

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
  cache: new InMemoryCache(),
    onError: ({
      networkError,
      graphQLErrors
    }) => {
      console.log('network error =>', networkError)
      console.log('graphql Error =>', graphQLErrors)
    }
})


function App() {
  return (
    <Page>
      < InnerPage >
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/login' component={LogIn}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/changepassword' component={ChangePassword}/>
            <Route path='/app/:id'> 
                <Navbar />
                <Route exact path='/app/homepage' component={Homepage}/>
                <Route exact path='/app/user/:profileId' component={UserProfile}/>
                <Route exact path='/app/users' component={UsersPage}/>
                <Route exact path='/app/create/report' component={AddReport}/>
                <Route exact path='/app/report/:reportNumber'  component={ReportPage} />
                <Route exact path='/app/create/diagnostico/:reportNumber' component={AddDiagnostico}/>
                
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
      </InnerPage>
    </Page>
  );
}

export default App;