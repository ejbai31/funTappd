class Api::BeersController < ApplicationController

  
  def create 
    @beer = Beer.new(beer_params)
    if @beer.save
      render 'api/beers/show'
    else
      render json: @beer.errors.fullmessages, status: 422
    end
  end
  
  def show
    @beer = Beer.find_by(id: params[:id])
  end

  def update
  end

  def destroy
    @beer = Beer.find(params[:id])
    @beer.delete
    render 'api/beers/index'
  end

  def index 
    @beers = Beer.all
  end
  
  private

  def beer_params
    params.require(:beer).permit(:name, :style, :abv, :description, :brewery_id, :rating)
  end
end
