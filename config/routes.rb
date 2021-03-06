Rails.application.routes.draw do

  post '/legislators/:id/follow', to: 'legislator#follow'

  get '/legislators/:id', to: 'legislator#info'

  get '/legislators/:id/votes', to: 'legislator#votes'

  get '/legislators/:id/bills/introduced', to: 'legislator#bills_introduced'

  get '/legislators/:id/bills/updated', to: 'legislator#bills_updated'

  post '/locateaddress', to: 'google_civic_api#index'

  get '/following', to: 'user#following'

  devise_for :users

  root 'application#index'

end
