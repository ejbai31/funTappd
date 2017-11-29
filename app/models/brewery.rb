class Brewery < ApplicationRecord
  validates :name, :location, presence: true

  has_many :beers
end
