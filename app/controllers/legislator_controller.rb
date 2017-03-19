class LegislatorController < ApplicationController
    def follow
        legislator_id = params[:id]
        user_id = current_user.id
        UserLegislator.create(legislator_id: legislator_id, user_id: user_id)
    end
end
