import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../frontpage/login';
import SessionFormContainer from './sessionform_container';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
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
