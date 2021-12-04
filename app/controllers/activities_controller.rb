class ActivitiesController < ApplicationController

    def create
        new_activity = Activity.create!(activity_params)
        render json: new_activity

    end

    def index
        activities = Activity.all.order(:date)
        render json: activities
    end

    def destroy
        activity = Activity.find(params[:id])
        activity.destroy
        head :no_content
    end

    private

    def activity_params
        params.permit(:name, :description, :date, :time, :event_id)
    end
end
