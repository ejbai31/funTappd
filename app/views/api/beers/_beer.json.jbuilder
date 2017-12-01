json.extract! beer, :id, :name, :style, :abv, :rating, :description, :created_at, :brewery_name, :brewery_model_id
json.image_url asset_path(beer.img_url)
