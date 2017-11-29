import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import beer from './beer_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  beer
});

export default rootReducer;