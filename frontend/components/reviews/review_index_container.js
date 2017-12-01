import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { getReviews, getReview, createReview, updateReview, deleteReview } from '../../actions/review_actions';

const getStateToProps = state => ({
  review: state.reviews,
  id: state.session.getCurrentUser
});

const getDispatchToProps = dispatch => ({
  deleteReview: id => dispatch(deleteReview(id))
});


export default connect(getStateToProps, getDispatchToProps)(ReviewIndex);