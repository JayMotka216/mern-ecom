import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/HOC/PrivateRoute';

import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import Product from './containers/Products';
import Order from './containers/Orders';
import Category from './containers/Category';

import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/signin' exact component={Signin} />
          <Route path='/signup' exact component={Signup} />
          <PrivateRoute path='/products' component={Product} />
          <PrivateRoute path='/orders' component={Order} />
          <PrivateRoute path='/category' component={Category} />
          <PrivateRoute path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
