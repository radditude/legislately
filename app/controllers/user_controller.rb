class UserController < ApplicationController
  def following
    if current_user
      results = UserLegislator.where(user_id: current_user)
      following = []

      results.each { |c| following << c.legislator_id }
      render json: { following: following.uniq }
    end
  end
end
