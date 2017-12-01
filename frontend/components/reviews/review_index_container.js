import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { getReviews, getReview, createReview, updateReview, } from '../../actions/review_actions';

const getStateToProps = state => ({
  review: state.reviews
});

const getDispatchToProps = state => ({

});


export default connect(getStateToProps, getDispatchToProps)(ReviewIndex);