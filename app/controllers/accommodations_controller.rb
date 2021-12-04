class AccommodationsController < ApplicationController

    def create
        new_accommodation = Accommodation.create!(accommodation_params)
        render json: new_accommodation
    end

    def destroy
        accommodation = Accommodation.find(params[:id])
        accommodation.destroy
        head :no_content
    end

    private

    def accommodation_params
        params.permit(:name ,:address, :event_id)
    end

end
