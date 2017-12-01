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

Faker::LordOfTheRings.unique.clear

10.times do 
  username = Faker::LordOfTheRings.unique.character
  password = "password"
  User.create!(username: username, password: password)
end



20.times do 
  name = Faker::Book.title
  location = Faker::LordOfTheRings.location
  Brewery.create!(name: name, location: location)
end


# 20.times do 
#   name = Faker::Beer.name
#   style = Faker::Beer.style
#   abv = Faker::Beer.alcohol
#   description = Faker::MostInterestingManInTheWorld.quote
#   rating = Faker::Number.between(1, 5)
#   brewery_id = Random.rand(Brewery.all.count) + 1 
#   Beer.create!(name: name, style: style, abv: abv, description: description, img_url: "beer_bottle-512.png", rating: rating, brewery_id: brewery_id)
# end



beer1 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "wow", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer2 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "meh", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer3 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "pretty good", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer4 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "tasty", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer5 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "disgusting", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer6 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "great value", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer7 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "so good", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer8 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "so good and tasty", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer9 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "best I've ever had", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer10 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "amen", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer11 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "PTL", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer12 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "nah", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer13 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "terrible", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer14 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "never again", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer15 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "who made this", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer16 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "MVP", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer17 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "never again", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer18 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "favorite", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer19 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "nope", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)
beer20 = Beer.create( name: Faker::Beer.name, style: Faker::Beer.style, abv: Faker::Beer.alcohol, description: "thumbs up", rating: Faker::Number.between(1, 5), brewery_id: Random.rand(Brewery.all.count)+1)



review1 = BeerReview.create!(rating: 1.0, review: "meh", user_id: 2, beer_id: 1)
review2 = BeerReview.create!(rating: 2.0, review: "oooooooo", user_id: 1, beer_id: 2)
review3 = BeerReview.create!(rating: 3.5, review: "so good", user_id: 1, beer_id: 4)
review4 = BeerReview.create!(rating: 4.0, review: "tasty", user_id: 1, beer_id: 1)
review5 = BeerReview.create!(rating: 5.0, review: "sooo goood and tasty", user_id: 2, beer_id: 2)