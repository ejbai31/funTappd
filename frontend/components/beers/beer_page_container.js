import { connect } from 'react-redux';
import { getReview, getReviews } from '../../actions/review_actions';
import BeerPage from './beer_page';

const mapStateToProps = state => ({
  reviews: state.reviews,
  review: state.review
});

const mapDispatchToProps = dispatch => ({
  getReview: id => dispatch(getReview(id)),
  getReviews: () => dispatch(getReviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerPage);