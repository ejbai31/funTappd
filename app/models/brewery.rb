class Brewery < ApplicationRecord
  validates :name, :location, :description, presence: true
end
