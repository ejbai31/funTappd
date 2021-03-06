export const createBeer = beer => (
  $.ajax({
    method: "POST", 
    url: "/api/beers",
    data: {beer}
  })
);

export const fetchBeer = id => (
  $.ajax({
    method: "GET", 
    url: `/api/beers/${id}`
  })
);

export const fetchBeers = () => (
  $.ajax({
    method: "GET", 
    url: '/api/beers'
  })
);

export const deleteBeer = id => (
  $.ajax({
    method: "DELETE", 
    url: `/api/beers/${id}`
  })
);

export const editBeer = id => (
  $.ajax({
    method: "GET",
    url: `/api/beers/${id}/edit`
  })
);

export const updateBeer = beer => (
  $.ajax({
    method: "PATCH",
    url: `/api/beers/${beer.id}`,
    data: {beer}
  })
);