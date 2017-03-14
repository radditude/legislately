Rails.application.routes.draw do
  
  post '/legislators/:id/follow', to: 'legislator#follow'
  
  post '/gapi', to: 'gapi#geocode'
  
  devise_for :users
  
  root 'application#index'
  
end
