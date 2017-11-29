import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FrontpageContainer from './frontpage/frontpage_container';
import NavBarContainer from './nav/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Dashboard from './dashboard/dashboard_container';
import BeerContainer from './beers/beer_index_container';

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Switch>
      <AuthRoute exact path="/" component={FrontpageContainer}/>
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/beers" component={BeerContainer} />
    </Switch>
    {/* <Route exact path="/beers" component={BeerContainer} />
    <Route exact path="/breweries" component={BreweryContainer} /> */}
    <footer>
      {/* TODO
      ADD LINKS TO MEDIA */}
    </footer>
  </div>
);

export default App;