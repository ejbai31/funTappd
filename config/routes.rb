Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:show, :create]
    resources :beers, only: [:show, :create, :destroy, :index, :update, :edit]
    resource :session, only: [ :show, :create, :destroy]
  end
  root to: 'root#root'
end
