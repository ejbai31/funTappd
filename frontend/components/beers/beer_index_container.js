import { connect } from 'react-redux';
import { fetchBeers, deleteBeer } from '../../actions/beer_actions';
import BeerIndex from './beer_index';

const mapStateToProps = state => {

  return({
    beers: state.beers
  });
};

const mapDispatchToProps = dispatch => ({
  getBeers: () => dispatch(fetchBeers()),
  deleteBeer: id => dispatch(deleteBeer(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerIndex);