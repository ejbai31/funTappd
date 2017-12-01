import { merge } from 'lodash';
import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from '../actions/review_actions';

const ReviewReducer = (state = [] , action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_REVIEWS:
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, newState, action.reviews);
    case REMOVE_REVIEW:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }

};

export default ReviewReducer;