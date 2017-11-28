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

10.times do 
  username = Faker::LordOfTheRings.character
  password = "password"
  User.create(username: username, password: password)
end


50.times do 
  name = Faker::Beer.name
  style = Faker::Beer.style
  abv = Faker::Beer.alcohol
  description = Faker::MostInterestingManInTheWorld.quote
  brewery_id = Random.rand(User.all.count) + 1 
  Beer.create(name: name, style: style, description: description, brewery_id: brewery_id)
end

20.times do 
  name = Faker::Book.title
  location = Faker::LordOfTheRings.location
  Brewery.create(name: name, location: location)
end