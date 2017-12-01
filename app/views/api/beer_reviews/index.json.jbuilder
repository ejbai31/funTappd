@reviews.each do |review|
  json.set! review.id do
    json.partial! 'api/beer_reviews/review', review: review
  end
end

json.all_reviews BeerReview.all.count