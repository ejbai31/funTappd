# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Brewery.destroy_all
# breweries = []
# 10.times do
#   brewery = Brewery.create!(name: "#{Faker::Coffee.blend_name} Brewery", location: Faker::Address.city, description: lorems.sample)
#   breweries << brewery
# end

# Beer.destroy_all
# beers = []
# 100.times do
#   beer = Beer.new(brewery_id: breweries.sample.id, name: Faker::Beer.name, beer_type: Faker::Beer.style, description: lorems.sample, image: File.open(beer_defaults))
#   if beer.save
#     beers << beer
#   end
# end

user1 = User.create(username: "guest", password:"password")

beer1 = Beer.create(name:"Nomelhead", style:"Gud beer", abv:350, description:"P good", brewery_id: 1, img_url:"https://48tk9j3a74jb133e1k2fzz2s-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/Monkish-Brewing-Other-Half-Nomelhead-bottle.jpg")

brewery1 = Brewery.create(name:"Monkish", location: "CA", description: "THE SPOT", img_url:"https://lh5.ggpht.com/K51rCCkrJs_Qqp1C4By6ToEBmuIOycGyJjDOtVaZWM99LNrIyq5h7cw2-iQTCltfV48f-X8fS6jD8zymdj5GUbQBz69AE6c=s750")