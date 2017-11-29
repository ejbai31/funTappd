json.extract! beer, :id, :name, :style, :abv, :rating, :description, :brewery_id, :created_at
json.image_url asset_path(beer.img_url)
