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
      <div>
        <SessionFormContainer />
      </div>
    );

  return (
    <header className="nav-bar">
      <h1 className="logo">BORK</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
