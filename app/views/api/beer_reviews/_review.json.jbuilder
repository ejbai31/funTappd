json.extract! review, :id, :comment, :img_url, :rating, :user_id, :beer_id
json.time_ago time_ago_string(review.created_at)
json.user review.user.username
json.brewery review.beer.brewery.name
json.beer review.beer.name
json.beer_image review.beer.image_url