import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import beers from './beer_reducer';
import reviews from './review_reducer';
import users from './user_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  beers,
  reviews,
  users
});

export default rootReducer;