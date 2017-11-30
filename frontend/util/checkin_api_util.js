
export const getCheckins= () => (
  $.ajax({
    method:"GET",
    url: `/api/checkins/`
  })
);


export const getCheckin = id => (
  $.ajax({
    method: "GET"
  })
);