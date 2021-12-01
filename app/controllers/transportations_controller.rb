class TransportationsController < ApplicationController

    def create
        new_transportation = Transportation.create!(transportation_params)
        render json: new_transportation

    end

    def index
        render json: Transportation.all
    end

    private

    def transportation_params
        params.permit(:mode, :date, :details, :guest_id, :event_id)
    end
end
