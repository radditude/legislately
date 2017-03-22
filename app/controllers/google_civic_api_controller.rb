class GoogleCivicApiController < ApplicationController
  def index
    url = 'https://www.googleapis.com/civicinfo/v2/representatives?key=key&fields=divisions'
    address_string = "#{api_params['street']} #{api_params['city']} #{api_params['state']} #{api_params['zip']}"
    # address_string.gsub!(" ", "%20")

    @resp = Faraday.get url do |req|
      req.params['key'] = ENV['GOOGLE_API_KEY']
      req.params['address'] = address_string
    end

    body_hash = JSON.parse(@resp.body)
    byebug
    location = body_hash['results'][0]['geometry']['location']
    render json: location
  end

  private

  def api_params
    params.require(:google_civic_api).permit(:street, :city, :state, :zip)
  end
end
