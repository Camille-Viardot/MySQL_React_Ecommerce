import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import '..//src/css/index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/Header.css'
import SignUp from './Component/SignUp'
import SignIn from './Component/SignIn'
import Home from './Component/Home'
import Dashboard from './Component/Dashboard'
import ProductList from './Component/ProductList'
import ProductPage from './Component/ProductPage'
import CreateProducts from './Component/CreateProducts'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './store/reducer';
import Header from './Component/Header'

const store = createStore(mainReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());


const myRouter = (
  <Provider store={store}>
      <Router>
          <Header/>
          <Switch>
              <Route path="/home" component={Home} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/productlist" component={ProductList} />
              <Route path="/product/:id" component={ProductPage} />
              <Route path="/CreateProducts" component={CreateProducts} />

          </Switch>
      </Router>
  </Provider>
);
ReactDOM.render(myRouter, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
