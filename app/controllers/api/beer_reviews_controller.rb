class Api::BeerReviewsController < ApplicationController

  def create
    @review = BeerReview.new(review_params) 
    if @review.save
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end


  def update
    @review = BeerReview.find(params[:id])
    if @review.update(review_params) && @review.user.username == current_user.username
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = BeerReview.find(params[:id])
    if @review.destroy
      render 'api/reviews/index' && @review.user.username == current_user.username
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  def index
    @reviews = BeerReview.all
  end

  def show
    @review = BeerReview.find(params[:id])
  end
  private

  def review_params
    params.require(:review).permit(:rating, :review)
  end

end
