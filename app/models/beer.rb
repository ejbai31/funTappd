class Beer < ApplicationRecord
  validates :name, :style, :abv, :description, presence: true 

  belongs_to :brewery

end
