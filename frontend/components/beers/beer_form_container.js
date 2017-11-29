import { connect } from 'react-redux';
import BeerForm from './beer_form';
import { createBeer, deleteBeer, updateBeer, editBeer } from '../../actions/beer_actions';

const mapStateToProps = (state, ownProps) => {

  return({
    id: ownProps.match.params.id
  });
};


const mapDispatchToProps = (dispatch, ownProps) => {

  return({
    formPost: beer => dispatch(createBeer(beer))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerForm);