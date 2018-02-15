import * as UserUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const RECEIVE_USERS = "RECEIVE_USER";

export const receiveUser = user => ({
  type: RECEIVE_USER, 
  user
});

export const updateUser = user => ({
  type: UPDATE_USER, 
  user
});

export const receiveUsers = () => ({
  type: RECEIVE_USERS
});

export const getUser = id => dispatch => (
  UserUtil.fetchUser(id)
    .then(user => dispatch(getUser(user)))
);

export const getUsers = () => dispatch => (
  UserUtil.fetchUsers()
    .then(beers => dispatch(receiveUsers(beers)))
);