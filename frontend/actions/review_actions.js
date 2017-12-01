import * as ReviewUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";


export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW, 
  review
});

export const removeReview = id => ({
  type: REMOVE_REVIEW,
  id
});

export const receiveErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS, 
  errors
}) ;

const receiveReviewErrors = (errors) => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};

export const getReviews = () => dispatch => {
  return ReviewUtil.getReviews()
    .then(reviews => dispatch(getReviews(reviews)),
    errors => dispatch(receiveReviewErrors(errors.responseJSON))
  );
};

export const getReview = (id) => dispatch => {
  return ReviewUtil.getReview(id)
    .then(review => dispatch(receiveReview(review)),
    errors => dispatch(receiveReviewErrors(errors.responseJSON))
  );
};

export const createReview = (review) => dispatch => {
  return ReviewUtil.createReview(review)
    .then(newReview => dispatch(receiveReview(newReview)),
    errors => dispatch(receiveReviewErrors(errors.responseJSON))
  );
};

export const updateReview = (review) => dispatch => {
  return ReviewUtil.updateReview(review)
    .then(updatedReview => dispatch(receiveReview(updatedReview)),
    errors => dispatch(receiveReviewErrors(errors.responseJSON))
  );
};

export const deleteCheckin = (review) => dispatch => {
  return ReviewUtil.deleteCheckin(review)
    .then(deletedReview => dispatch(removeReview(deletedReview)),
    errors => dispatch(receiveReviewErrors(errors.responseJSON))
  );
};