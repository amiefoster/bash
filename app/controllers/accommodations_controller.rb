class AccommodationsController < ApplicationController

    def create
        new_accommodation = Accommodation.create!(accommodation_params)
        render json: new_accommodation
    end

    private

    def accommodation_params
        params.permit(:name ,:address, :event_id)
    end

end
