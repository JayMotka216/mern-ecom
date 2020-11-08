import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';

function App() {
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
