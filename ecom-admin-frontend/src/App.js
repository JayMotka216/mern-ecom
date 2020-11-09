import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
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
          <PrivateRoute path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
