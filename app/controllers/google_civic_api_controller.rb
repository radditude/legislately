class GoogleCivicApiController < ApplicationController
  def index
    # setting up request and params
    url = 'https://www.googleapis.com/civicinfo/v2/representatives?key=key&fields=offices'
    address_string = "#{api_params['street']} #{api_params['city']} #{api_params['state']} #{api_params['zip']}"

    @resp = Faraday.get url do |req|
      req.params['key'] = ENV['GOOGLE_API_KEY']
      req.params['address'] = address_string
    end

    # getting data into usable format and return
    # only the state and congressional district for the given address
    body_hash = JSON.parse(@resp.body)
    result = body_hash['offices'][3]['name']
    result.slice!("United States House of Representatives ")
    result_array = result.split('-')
    district = { 
      state: result_array[0],
      district: result_array[1]
    }
    
    render json: district
  end

  private

  def api_params
    params.require(:google_civic_api).permit(:street, :city, :state, :zip)
  end
end
