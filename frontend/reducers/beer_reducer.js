import merge from 'lodash/merge';
import { RECEIVE_BEER, RECEIVE_BEERS, REMOVE_BEER } from '../actions/beer_actions';

const BeerReducer = (state=[], action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_BEERS:
      return merge({}, action.beers);
    case RECEIVE_BEER:
      return merge({}, state, {[action.beer.id]: action.beer});
    case REMOVE_BEER:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default BeerReducer;