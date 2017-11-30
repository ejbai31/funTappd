class Api::BeersController < ApplicationController

  
  def create 
    @beer = Beer.new(beer_params)
    brewery = Brewery.find_or_create_by(name: params[:beer][:brewery])
    @beer.brewery = brewery
    if @beer.save
      render 'api/beers/show'
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def update
    @beer = Beer.find_by(id: params[:id])
    brewery = Brewery.find_or_create_by(name: params[:beer][:brewery][:name])
    @beer.update(brewery: brewery)
    if @beer && @beer.update(beer_params)
      render :show
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def edit
    @beer = Beer.find_by(id: params[:id])
    render 'api/beers/show'
  end
  
  def show
    @beer = Beer.find_by(id: params[:id])
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
    params.require(:beer).permit(:name, :style, :abv, :description, :rating)
  end
end
