class LegislatorController < ApplicationController
    def follow
        legislator_id = params[:id]
        user_id = current_user
        byebug
    end
end
