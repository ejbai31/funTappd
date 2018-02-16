import React from 'react';
import UserPage from './user_page';
import { connect } from 'react-redux';
import { getUser, getUsers } from '../../actions/user_actions';

const getStateToProps = state => ({
  user: state.user, 
  review: state.review, 
  beer: state.beer
  // TODO: ADD USER ACTIONS
});

const getDispatchToProps = dispatch => ({
  getUser: id => dispatch(id),
  getUsers: () => dispatch()
  // TODO: CREATE USER DISPATCH ACTIONS
});

export default connect(getStateToProps, getDispatchToProps)(UserPage);