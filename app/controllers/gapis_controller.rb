class GapisController < ApplicationController
  def index
    render json: {key: ENV['GOOGLE_API_KEY']}
  end
end
