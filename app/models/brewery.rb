class Brewery < ApplicationRecord
  validates :name, :location, presence: true
end
