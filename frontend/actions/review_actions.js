import * as CheckinUtil from '../../util/checkin_utils;';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";


export const receiveCheckins = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveCheckin = review => ({
  type: RECEIVE_REVIEW, 
  review
});