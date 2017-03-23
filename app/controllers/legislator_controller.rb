class LegislatorController < ApplicationController

    # TODO: there's got to be a way to have less repetitive code in these API calls. Helper?

    def follow
        legislator_id = params[:id]
        user_id = current_user.id
        UserLegislator.create(legislator_id: legislator_id, user_id: user_id)
    end

    def info
      legislator_id = params[:id]
      url = "https://api.propublica.org/congress/v1/members/#{legislator_id}.json"
      @resp = Faraday.get url do |req|
        req.headers['X-API-Key'] = ENV['PROPUBLICA_API_KEY']
      end

      body_hash = JSON.parse(@resp.body)
      legislator = body_hash['results'][0]
      render json: legislator
    end

    def votes
      legislator_id = params[:id]
      url = "https://api.propublica.org/congress/v1/members/#{legislator_id}/votes.json"
      @resp = Faraday.get url do |req|
        req.headers['X-API-Key'] = ENV['PROPUBLICA_API_KEY']
      end

      body_hash = JSON.parse(@resp.body)
      votes = body_hash['results'][0]
      render json: votes
    end

    def bills_introduced
      legislator_id = params[:id]
      url = "https://api.propublica.org/congress/v1/members/#{legislator_id}/bills/introduced.json"
      @resp = Faraday.get url do |req|
        req.headers['X-API-Key'] = ENV['PROPUBLICA_API_KEY']
      end

      body_hash = JSON.parse(@resp.body)
      # bills = body_hash['results'][0]
      render json: body_hash
    end

    def bills_updated
      legislator_id = params[:id]
      url = "https://api.propublica.org/congress/v1/members/#{legislator_id}/bills/updated.json"
      @resp = Faraday.get url do |req|
        req.headers['X-API-Key'] = ENV['PROPUBLICA_API_KEY']
      end

      body_hash = JSON.parse(@resp.body)
      # bills = body_hash['results'][0]
      render json: body_hash
    end
end
