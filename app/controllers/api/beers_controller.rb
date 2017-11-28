class Api::BeersController < ApplicationController

  def show
    @beer = Drink.find_by(id: params[:id])
  end

  def create 
    @beer = Drink.new(beer_params)
    if @beer.save
      render 'api/beers/show'
    else
      render json: @beer.errors.fullmessages, status: 422
    end
  end

  def update
  end

  def destroy
    @beer = Drink.find(params[:id])
    @beer.delete
    render 'api/beers/index'
  end
  
  private

  def beer_params
    params.require(:beer).permit(:name, :style, :abv, :description, :brewery_id, :rating)
  end
end
