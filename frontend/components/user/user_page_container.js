import React from 'react';
import UserPage from './user_page';
import { connect } from 'react-redux';

const getStateToProps = state => ({
  user: state.user
  // TODO: ADD USER ACTIONS
});

const getDispatchToProps = dispatch => ({
  getUser: () => dispatch()
  // TODO: CREATE USER DISPATCH ACTIONS
});

export default connect(getStateToProps, getDispatchToProps)(UserPage);