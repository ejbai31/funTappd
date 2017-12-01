class Beer < ApplicationRecord
  validates :name, :style, :abv, :description, presence: true 

  belongs_to :brewery

  has_many :reviews



  def brewery_name
    brewery.name
  end

  def brewery_model_id
    brewery_id
  end
end
