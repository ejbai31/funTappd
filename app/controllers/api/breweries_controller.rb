class Api::BreweriesController < ApplicationController
  
  def create 
    @brewery = Beer.new(brewery_params)
    if @brewery.save
      render 'api/beers/show'
    else
      render json: @brewery.errors.full_messages, status: 422
    end
  end


  private 

  def brewery_params
    params.require(:brewery).permit(:name, :location)
  end

end
