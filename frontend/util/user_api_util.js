export const fetchUser = id => (
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  })
);

export const updateUser = user => (
  $.ajax({
    method: "PATCH", 
    url: `/api/users/${user.get("user[id]")}`
  })
);

export const deleteUser = user => (
  $.ajax({
    method: "DELETE"
  })
);