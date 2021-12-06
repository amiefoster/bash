class PackingListsController < ApplicationController

    def create
        new_item = PackingList.create!(packing_params)
        render json: new_item, status: :created

    end

    def destroy
        packingList = PackingList.find(params[:id])
        packingList.destroy
        head :no_content
    end

    private

    def packing_params
        params.permit(:item, :event_id)
    end

end
