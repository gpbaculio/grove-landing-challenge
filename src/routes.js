import React from 'react';
import { Router, Route } from 'react-router'

import Landing from './containers/Landing';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Landing} />
  </Router>
);

export default Routes;