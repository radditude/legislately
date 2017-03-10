class GapiController < ApplicationController
  def geocode
    url = 'https://maps.googleapis.com/maps/api/geocode/json'
    @resp = Faraday.get url do |req|
      req.params['key'] = ENV['GOOGLE_API_KEY']
      req.params['address'] = '2732+orleans+ave+new+orleans+la+70119'
    end
    body_hash = JSON.parse(@resp.body)
    location = body_hash['results'][0]['geometry']['location']
    render json: location
  end
end
