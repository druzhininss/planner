import React from 'react';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { checkAuth } from '../../redux/actionCreators/userAC';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Nav from '../Nav/Nav';
import Registration from '../Registration/Registration';

function App() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(checkAuth())
  }, [dispatch]);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/registration" exact component={Registration} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
