import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../frontpage/login';
import SessionFormContainer from './sessionform_container';
import { signup } from '../../util/session_api_util';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="nav-show">
      <div className="nav-links">
        <Link className="nav-buttons" to="/beers">Beers</Link>
        {/* <Link className="nav-buttons" to="/breweries">Breweries</Link> */}
      </div>
      <div className="nav-display">
        <p>Welcome, {currentUser.username}!</p>
        <button onClick={logout}>Log Out</button>
      </div>
    </div>
  ) : (
      <div className="session-form">
        <SessionFormContainer />
      </div>
    );

  return (
    <header className="nav-bar">
      <div>
        <Link to="/dashboard" className="logo">funTappd</Link>
      </div>
      <div className="session-form">
        {display}
      </div>
    </header>
  );
};