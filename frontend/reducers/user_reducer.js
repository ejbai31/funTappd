import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions';

const UserReducer = (state=[], action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
};

export default UserReducer;