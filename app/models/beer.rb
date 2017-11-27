class Beer < ApplicationRecord

  validates :name, :style, :abv, :description, presence: true 
  

end
