export const getReviews = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/beer_reviews/',
  });
};

export const getReview = id => {
  return $.ajax({
    method: 'GET',
    url: `api/beer_reviews/${id}`
  });
};

export const createReview = review => {
  return $.ajax({
    method: 'POST',
    url: 'api/beer_reviews',
    data: { review }
  });
};

export const updateReview = (review) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/beer_reviews/${review.id}`,
    data: { review }
  });
};

export const deleteReview = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/beer_reviews/${id}`
  });
};