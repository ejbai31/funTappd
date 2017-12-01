class Api::BeersController < ApplicationController

  
  def create 
      p "="*8
    p params
       p "="*8
    @beer = Beer.new(beer_params)
    brewery = Brewery.find_or_create_by(name: params[:beer][:brewery])
    @beer.brewery = brewery
    p "="*8
    p beer_params
       p "="*8
    if @beer.save
      render 'api/beers/show'
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end


  def update
    p params
    @beer = Beer.find_by(id: params[:id])
    brewery = Brewery.find_or_create_by(name: params[:beer][:brewery])
    p "="*8
    p @beer
    p brewery
    p "="*8 
    # @beer.update(brewery: brewery)
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
    render 'api/beers/show'
  end

  def index 
    @beers = Beer.all
  end
  
  private

  def beer_params
    params.require(:beer).permit(:name, :style, :abv, :description, :rating)
  end
end