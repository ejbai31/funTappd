import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FrontpageContainer from './frontpage/frontpage_container';
import NavBarContainer from './nav/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Dashboard from './dashboard/dashboard_container';
import BeerContainer from './beers/beer_index_container';
import BeerFormContainer from './beers/beer_form_container';
import BeerReviewsContainer from './reviews/beer_review_container';
import UserPageContainer from './user/user_page_container';

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Switch>
      <AuthRoute exact path="/" component={FrontpageContainer} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <ProtectedRoute exact path="/beers" component={BeerContainer} />
      <ProtectedRoute path="/create_beer" component={BeerFormContainer} />
      <ProtectedRoute path= "/beers/:id/edit" component={BeerFormContainer} />
      <ProtectedRoute path= "/beers/:id/reviews" component={BeerReviewsContainer} />  
      <ProtectedRoute path= "/users/:id" component={UserPageContainer} />  
    </Switch>
  </div>
);

export default App;