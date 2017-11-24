import React from 'react';
import { Route } from 'react-router-dom';
import FrontpageContainer from './frontpage/frontpage_container';
import NavBarContainer from './nav/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Dashboard from './dashboard/dashboard';

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <AuthRoute exact path="/" component={FrontpageContainer}/>
    <ProtectedRoute path="/dashboard" component={Dashboard} />

  </div>
);

export default App;