class Beer < ApplicationRecord
  validates :name, :style, :abv, :description, presence: true 

  belongs_to :brewery

  has_many :reviews

  after_initialize :insure_img

  def insure_img
    self.img_url ||= "beer_bottle-512.png"
  end


  def brewery_name
    brewery.name
  end

  def brewery_model_id
    brewery_id
  end
end
