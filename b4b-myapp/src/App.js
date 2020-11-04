import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/misc/Register';
import Home from './components/Home/Home';
import Details from './components/Home/Details';
import Navbar from './components/Navbar'
import ExternalProfile from './components/Profile/ExternalProfile'
import Profile from './components/Profile/Profile'
import Services from './components/Services/Services'
import NewProposal from './components/Services/NewProposal'
import BusinessList from './components/Services/BusinessList'
//import Products from './components/Products/Products'
//import Services from './components/Services/Services'
import AuthenticatedRoute, { NotAuthenticatedRoute } from './components/misc/AuthenticatedRoute';
import ServicesSector from './components/Services/Services';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>

        <main className="test">
        <svg className="back" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <Switch>

          <NotAuthenticatedRoute exact path="/login" component={Login} />

          <NotAuthenticatedRoute exact path="/signup" component={Signup} />        

          <AuthenticatedRoute exact path="/home" component={Home} />

          <AuthenticatedRoute exact path="/opportunity-details" component={Details} />

          <AuthenticatedRoute exact path="/business/profile" component={ExternalProfile} />

          <AuthenticatedRoute exact path="/business/myprofile" component={Profile} />

          <AuthenticatedRoute exact path="/services" component={Services} />

          <AuthenticatedRoute path="/business-list" component={BusinessList} />

          <AuthenticatedRoute exact path="/new-proposal" component={NewProposal} />

        </Switch>
          
        </main>
      </div>
    )
  }
}

export default App;
