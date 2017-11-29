import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import beers from './beer_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  beers
});

export default rootReducer;