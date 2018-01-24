Rails.application.routes.draw do
  devise_for :users
  get '/customers', to: 'customers#index'
  get '/customers/*path', to: 'customers#index'
  root to: 'dashboard#index'
end
