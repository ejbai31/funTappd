class Api::BeersController < ApplicationController

  
  def create 
    brewery = Brewery.find_or_create_by(name: params[:beer][:brewery])
    @beer = Beer.new(beer_params)
    @beer.img_url = "http://res.cloudinary.com/ejbai31/image/upload/c_scale,w_512/v1512167948/beer_bottle-512_uutbkv.png" unless @beer.img_url
    @beer.brewery = brewery
    if @beer.save 
      render 'api/beers/show'
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end


  def update
    @beer = Beer.find_by(id: params[:id])
    brewery = Brewery.find_or_create_by(name: params[:beer][:brewery])
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
    params.require(:beer).permit(:name, :style, :abv, :description, :rating, :img_url)  
  end

  def brewery_params
    params.require(:beer).permit(:brewery)
  end
end