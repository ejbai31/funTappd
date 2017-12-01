class Brewery < ApplicationRecord
  validates :name, presence: true

  has_many :beers
  has_many :reviews
end
