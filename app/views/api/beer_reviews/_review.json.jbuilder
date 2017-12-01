json.extract! review, :id, :review, :rating, :user_id, :beer_id
json.time_ago time_ago_in_words(review.created_at)
json.user review.user.username
json.brewery review.beer.brewery.name
json.beer review.beer.name