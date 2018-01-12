import { connect } from 'react-redux';
import BeerReview from './beer_review';
import React from 'react';
import { getReviews, updateReview } from '../../actions/review_actions';

const getStateToProps = state => ({
  reviews: state.reviews,
  id: state.session.getCurrentBeer
  // TODO ADD CURRENT BEER ID NUMBER TO FETCH REVIEWS PERTAINING ONLY TO THIS BEER
});

const getDispatchToProps = dispatch => ({
  getReviews: () => dispatch(getReviews())
});

export default connect(getStateToProps, getDispatchToProps)(BeerReview);