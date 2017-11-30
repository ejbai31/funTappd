import * as BeerUtil from '../util/beer_api_util';

export const RECEIVE_BEER = 'RECEIVE_BEER';
export const RECEIVE_BEERS = 'RECEIVE_BEERS';
export const REMOVE_BEER = 'REMOVE_BEER';
export const CREATE_BEER = 'CREATE_BEER';



export const receiveBeer = beer => ({
  type: RECEIVE_BEER, 
  beer
});

export const receiveBeers = (beers) => ({
  type: RECEIVE_BEERS,
  beers
});

export const removeBeer = id => ({
  type: REMOVE_BEER,
  id
});

export const createBeer = beer => dispatch => (
  BeerUtil.createBeer(beer)
    .then(newBeer => dispatch(receiveBeer(newBeer)))
);

export const fetchBeer = id => dispatch => (
  BeerUtil.fetchBeer(id)
    .then(beer => dispatch(receiveBeer(beer))
));

export const fetchBeers = () => dispatch => (
  BeerUtil.fetchBeers()
    .then(beers => dispatch(receiveBeers(beers)))
);

export const deleteBeer = id => dispatch => (
  BeerUtil.deleteBeer(id)
    .then(beer => dispatch(removeBeer(beer)))
);

export const updateBeer = beer => dispatch => (
  BeerUtil.updateBeer(beer)
    .then(updatedBeer => dispatch(receiveBeer(updatedBeer)))
);

export const editBeer = id => dispatch => (
  BeerUtil.editBeer(id)
    .then(editedBeer => dispatch(receiveBeer(editedBeer)))
);