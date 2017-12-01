import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import React from 'react';
import { getReviews, getReview, createReview, updateReview, deleteReview } from '../../actions/review_actions';

const getStateToProps = state => ({
  reviews: state.reviews,
  id: state.session.getCurrentUser
});

const getDispatchToProps = dispatch => ({
  deleteReview: id => dispatch(deleteReview(id)),
  getReviews: () => dispatch(getReviews())
});


export default connect(getStateToProps, getDispatchToProps)(ReviewIndex);