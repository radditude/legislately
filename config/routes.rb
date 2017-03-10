Rails.application.routes.draw do
  post '/gapi', to: 'gapi#geocode'
  devise_for :users
  root 'application#index'
end
