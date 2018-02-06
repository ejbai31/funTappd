Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:show, :create, :update, :edit, :index] do
      resources :beer_reviews, only: [:index]
    end
    resources :beers, only: [:show, :create, :destroy, :index, :update, :edit] do
      resources :beer_reviews, only: [:index]
    end
    resources :breweries, only: [:create, :index]
    resources :beer_reviews, only: [:create, :show, :update, :destroy, :index]
    # get 'api/reviews' => 'beer_reviews#show'
    resource :session, only: [ :show, :create, :destroy]
  end
  root to: 'root#root'
end
