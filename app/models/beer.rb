class Beer < ApplicationRecord

  validates :name, :type, :abv, :description, presence: true 
  

end
