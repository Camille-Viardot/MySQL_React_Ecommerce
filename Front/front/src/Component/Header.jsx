import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css'
import {connect} from 'react-redux'
// import SignUp from './SignUp'
// import SignIn from './SignIn'
// import Home from './Home'
// import Dashboard from './Dashboard'
// import ProductList from './ProductList'
// import ProductPage from './ProductPage'
// import CreateProduct from './CreateProducts'




class App extends Component {

  logout = () => {
    localStorage.clear();

    window.location.href = "/signin";
  }
 
  
  render() {
    return (
      <div>
        <ul>
          {/* recupere le token contenue dans le state du store */}
          {!this.props.token ? (  
            // si il n'y a pas de token loguer ca
            <span>

              <li><Link to="/signup">S'enregistrer</Link></li>
              <li><Link to="/signin">Se connecter</Link></li>

            </span>
            
              // sinon loguer ca
          ) : (
              <span>
                <li><Link to="/Home">Page d'Accueil</Link></li>
                <li><Link to="/Dashboard">Dashboard</Link></li>
                <li><Link to="/ProductList">ProductList</Link></li>
                <li><Link to="/ProductPage">ProductPage</Link></li>
                <li><Link to="/CreateProducts">CreateProduct</Link></li>
                <li onClick={this.logout}>Logout</li>

              </span>
            )}

        </ul>
{/* 
        <Route path="/Home" component={Home} />
        <Route path="/Sign-In" component={SignIn} />
        <Route path="/Sign-Up" component={SignUp} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/ProductList" component={ProductList} />
        <Route path="/ProductPage/:id" component={ProductPage} />
        <Route path="/CreateProduct" component={CreateProduct} /> */}

        {/* :id nous permet de recuperer id de la bdd dans notre url ETAPE 1 */}


      </div>
      
    );
  }
}


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    token: state.userReducer.token
  }
}

export default connect(mapStateToProps)(App);
//lie les states du store au props du component