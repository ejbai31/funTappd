export const createBrewery = brewery => (
  $.ajax({
    method: "POST",
    url: "/api/breweries",
    data: {brewery}
  })
);