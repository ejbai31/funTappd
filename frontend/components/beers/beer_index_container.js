import { connect } from 'react-redux';
import { fetchBeers } from '../../actions/beer_actions';
import BeerIndex from './beer_index';

const mapStateToProps = state => ({
  beers: state.beers
});

const mapDispatchToProps = dispatch => ({
  getBeers: () => dispatch(fetchBeers())
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerIndex);