import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../containers/home';

import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => (<Redirect to="/home" />)} />
    <PrivateRoute
      path="/home"
      component={Home}
      layout={Layout}
    />
  </Switch>
);

export default Routes;
