class Beer < ApplicationRecord
  validates :name, :style, :abv, :description, presence: true 

  belongs_to :brewery

  after_initialize :insure_img

  def insure_img
    self.img_url ||= "beer_bottle-512.png"
  end

end
