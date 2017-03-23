Rails.application.routes.draw do

  post '/legislators/:id/follow', to: 'legislator#follow'

  get '/legislators/:id', to: 'legislator#show'

  get '/legislators/:id/votes', to: 'legislator#votes'

  get '/legislators/:id/bills', to: 'legislator#bills'

  post '/locateaddress', to: 'google_civic_api#index'

  devise_for :users

  root 'application#index'

end
