import { connect } from 'react-redux';
import BeerForm from './beer_form';
import { withRouter } from 'react-router-dom';
import { createBrewery } from '../../actions/brewery_actions';
import { fetchBeer, createBeer, deleteBeer, updateBeer, editBeer } from '../../actions/beer_actions';

const mapStateToProps = (state, ownProps) => {
  console.log("OWNPROPS", ownProps);
  console.log("STATE", state);
  let formType = "new";
  let fields = ({
    name: '',
    style: '',
    abv: '',
    rating: false,
    description: '',
    brewery: ''
  });

  if (ownProps.match.path === "/beers/:id/edit"){
    fields = state.beers[ownProps.match.params.id];
    formType = "edit";
  }
  return({fields, formType});
};


const mapDispatchToProps = (dispatch, ownProps) => {

  return({
    createBeer: beer => dispatch(createBeer(beer)),
    fetchBeer: id => dispatch(fetchBeer(id)),
    updateBeer: beer => dispatch(updateBeer(beer))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BeerForm));