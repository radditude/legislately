class GoogleCivicApiController < ApplicationController
  def index
    # TODO: refactor this monster

    # setting up request and params
    google_url = 'https://www.googleapis.com/civicinfo/v2/representatives?key=key&fields=offices'

    @resp = Faraday.get google_url do |req|
      req.params['key'] = ENV['GOOGLE_API_KEY']
      req.params['address'] = params['address']
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

    # setting up the call to ProPublica Congress API
    senate_url = "https://api.propublica.org/congress/v1/members/senate/#{result_array[0]}/current.json"
    house_url = "https://api.propublica.org/congress/v1/members/house/#{result_array[0]}/#{result_array[1]}/current.json"

    @senate_resp = Faraday.get senate_url do |req|
      req.headers['X-API-Key'] = ENV['PROPUBLICA_API_KEY']
    end

    @house_resp = Faraday.get house_url do |req|
      req.headers['X-API-Key'] = ENV['PROPUBLICA_API_KEY']
    end

    # parsing ProPublica data
    senators = JSON.parse(@senate_resp.body)
    house = JSON.parse(@house_resp.body)
    full_result = {
      info: district,
      reps: senators['results'] + house['results']
    }

    render json: full_result
  end

  private

  def api_params
    params.require(:google_civic_api).permit(:address)
  end
end
