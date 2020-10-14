import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../css/Header.css'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Home from './Home'
import Dashboard from './Dashboard'


class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/Home">Page d'Accueil</Link></li>
          <li><Link to="/Sign-Up">S'enregistrer</Link></li>
          <li><Link to="/Sign-In">Se connecter</Link></li>
        </ul>

        <Route path="/Home" component={Home}/>
        <Route path="/Sign-In" component={SignIn}/>
        <Route path="/Sign-Up" component={SignUp}/>
        <Route path="/Dashboard" component={Dashboard} onEnter={requireAuth}/>
            
      </div>
    );
  }
}


export default App;