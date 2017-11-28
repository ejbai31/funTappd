import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../frontpage/login';
import SessionFormContainer from './sessionform_container';
import { signup } from '../../util/session_api_util';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <div className="nav-links">
        <Link to="/beers">Beers</Link>
        <Link to="/breweries">Breweries</Link>
      </div>
      <p>{currentUser.username}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
      <div className="session-form">
        <SessionFormContainer />
      </div>
    );

  return (
    <header className="nav-bar">
      <div>
        <h1 className="logo">funTappd</h1>
      </div>
      <div className="session-form">
        {display}
      </div>
    </header>
  );
};