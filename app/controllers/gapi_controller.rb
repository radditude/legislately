class GapiController < ApplicationController
  def geocode
    url = 'https://maps.googleapis.com/maps/api/geocode/json'
    address_string = "#{gapi_params['street']}+#{gapi_params['city']}+#{gapi_params['state']}+#{gapi_params['zip']}"
    address_string.gsub!(" ", "+")

    @resp = Faraday.get url do |req|
      req.params['key'] = ENV['GOOGLE_API_KEY']
      req.params['address'] = address_string
    end

    body_hash = JSON.parse(@resp.body)
    location = body_hash['results'][0]['geometry']['location']
    render json: location
  end

  private

  def gapi_params
    params.require(:gapi).permit(:street, :city, :state, :zip)
  end
end
