import React from 'react';
import { Route } from 'react-router-dom';
import FrontpageContainer from './frontpage/frontpage_container';
import NavBarContainer from './nav/navbar_container';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Route exact path="/" component={FrontpageContainer}/>
    <Route path="" />
  </div>
);

export default App;