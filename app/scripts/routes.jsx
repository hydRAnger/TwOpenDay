/* @flow */

import React from 'react';
import {Route, RouteHandler} from 'react-router';

import App from './components/App';

var routes = (
  <Route handler={RouteHandler}>
    <Route handler={App} />
  </Route>
);

export default routes;
