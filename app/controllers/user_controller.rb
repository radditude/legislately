class UserController < ApplicationController
  def following
    if current_user
      results = UserLegislator.where(user_id: current_user)
      following = {}

      results.each do |l|
        url = "https://api.propublica.org/congress/v1/members/#{l.legislator_id}.json"
        @resp = Faraday.get url do |req|
          req.headers['X-API-Key'] = ENV['PROPUBLICA_API_KEY']
        end

        body_hash = JSON.parse(@resp.body)
        legislator = body_hash['results'][0]
        title = legislator['roles'][0]['title'].slice(0,3)
        following[l.legislator_id] = "#{title}. #{legislator['first_name']} #{legislator['last_name']}"
      end
      
      render json: following
    end
  end
end
