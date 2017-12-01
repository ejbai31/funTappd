import { connect } from 'react-redux';
import BeerForm from './beer_form';
import { withRouter } from 'react-router-dom';
import { createBrewery } from '../../actions/brewery_actions';
import { fetchBeer, createBeer, deleteBeer, updateBeer, editBeer } from '../../actions/beer_actions';

const mapStateToProps = (state, ownProps) => {
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
    
    let beer = state.beers[ownProps.match.params.id];
    formType = "edit";
    fields.brewery = beer.brewery_name;
    fields.name = beer.name;
    fields.style = beer.style;
    fields.description = beer.description;
    fields.abv = beer.abv;
  }

  return({fields, formType});
};


const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = "new";
  if (ownProps.match.path === "/beers/:id/edit"){
    let formAction = updateBeer;
  }else{
    let formAction = createBeer;
  }
  return({
    createBeer: beer => dispatch(createBeer(beer)),
    fetchBeer: id => dispatch(fetchBeer(id)),
    updateBeer: beer => dispatch(updateBeer(beer)),
    deleteBeer: id => dispatch(deleteBeer(id))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BeerForm));