Rails.application.routes.draw do
  get '/gapi', to: 'gapi#geocode'
  devise_for :users
  root 'application#index'
end
