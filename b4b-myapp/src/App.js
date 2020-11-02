import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home/Home';
import Navbar from './components/Navbar'
import ExternalProfile from './components/Profile/ExternalProfile'
import Profile from './components/Profile/Profile'
//import Products from './components/Products/Products'
//import Services from './components/Services/Services'
import AuthenticatedRoute, { NotAuthenticatedRoute } from './components/misc/AuthenticatedRoute';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>

        <main className="container">
          <Switch>

            <NotAuthenticatedRoute exact path="/login" component={Login} />
             

            <AuthenticatedRoute exact path="/home" component={Home} />

            <AuthenticatedRoute exact path="/business/profile" component={ExternalProfile} />

            <AuthenticatedRoute exact path="/business/myprofile" component={Profile} />

            {/* <AuthenticatedRoute exact path="/services" component={Services} />

            <AuthenticatedRoute exact path="/products" component={Products} /> */}


            

          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
