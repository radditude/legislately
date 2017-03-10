class GapisController < ApplicationController
  def index
    address = params['address'];
    render json: {key: ENV['GOOGLE_API_KEY'], address: address}
  end
end
