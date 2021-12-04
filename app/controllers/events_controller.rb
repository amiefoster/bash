class EventsController < ApplicationController

    def index
        events = Event.all
        render json: events

    end

    def show
        event = Event.find(params[:id])
        render json: event, serializer: CustomTransportSerializerSerializer

    end

    def create
        new_event = Event.create!(event_params)
        render json: new_event, status: :created

    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
        head :no_content
    end

    private

    def event_params
        params.permit(:name, :description, :location, :date, :user_id)
    end
end
