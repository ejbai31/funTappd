

export const getAllReviews = i => (
  $.ajax({
    method: "GET",
    url: `/api/reviews`
  })
);