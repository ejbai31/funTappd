Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:show, :create] do
      resources :reviews, only: [:index]
    end
    resources :beers, only: [:show, :create, :destroy, :index, :update, :edit] do
      resources :reviews, only: [:index]
    end
    resources :breweries, only: [:create]
    resources :reviews, only: [:create, :show,:update, :destroy]
    resource :session, only: [ :show, :create, :destroy]
  end
  root to: 'root#root'
end
