Rails.application.routes.draw do
  get '/gapis', to 'GapisController#index'
  devise_for :users
  root 'application#index'
end
