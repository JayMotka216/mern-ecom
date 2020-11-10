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
import { getAllCategory, isUserLoggedIn } from './actions';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const category = useSelector(state => state.category);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(getAllCategory());
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/signin' exact component={Signin} />
          <Route path='/signup' exact component={Signup} />
          <PrivateRoute path='/products' exact component={Product} />
          <PrivateRoute path='/orders' exact component={Order} />
          <PrivateRoute path='/category' exact component={Category} />
          <PrivateRoute path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
