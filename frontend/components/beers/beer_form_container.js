import { connect } from 'react-redux';
import BeerForm from './beer_form';
import { withRouter } from 'react-router-dom';
import { createBeer, deleteBeer, updateBeer, editBeer } from '../../actions/beer_actions';

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

  if (ownProps.match.path === "/api/beers/:id"){
    fields = state.beers[ownProps.match.params.id];
    formType = "edit";
  }
  return({fields, formType});
};


const mapDispatchToProps = (dispatch, ownProps) => {

  return({
    createBeer: beer => dispatch(createBeer(beer))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BeerForm));