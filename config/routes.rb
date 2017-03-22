Rails.application.routes.draw do
  
  post '/legislators/:id/follow', to: 'legislator#follow'
  
  post '/locateaddress', to: 'google_civic_api#index'
  
  devise_for :users
  
  root 'application#index'
  
end
