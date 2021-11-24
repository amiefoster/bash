class ActivitiesController < ApplicationController

    def create
        new_activity = Activity.create!(activity_params)
        render json: new_activity

    end

    private

    def activity_params
        params.permit(:name, :description, :date, :time, :event_id)
    end
end
