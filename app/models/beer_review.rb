class BeerReview < ApplicationRecord
  validates :rating, presence: true

  belongs_to :user 

  belongs_to :beer

  def averager
    
  end

end
