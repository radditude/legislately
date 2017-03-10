Rails.application.routes.draw do
  get '/gapis', to: 'gapis#index'
  devise_for :users
  root 'application#index'
end
