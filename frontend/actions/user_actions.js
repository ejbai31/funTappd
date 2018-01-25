import * as UserUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";

export const receive_user = user => ({
  type: RECEIVE_USER, 
  user
});

export const update_user = user => ({
  type: UPDATE_USER, 
  user
});

export const getUser = id => dispatch => (
  UserUtil.fetchUser(id)
    .then(user => dispatch(getUser(user)))
);