class GuestsController < ApplicationController

    def index
        render json: Guest.all
    end

    def create
        new_guest = Guest.create!(guest_params)
        render json: new_guest
    end

    private

    def guest_params
        params.permit(:user_id, :event_id)
    end
end
