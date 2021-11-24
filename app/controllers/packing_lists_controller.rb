class PackingListsController < ApplicationController

    def create
        new_item = PackingList.create!(packing_params)
        render json: new_item

    end

    private

    def packing_params
        params.permit(:item, :event_id)
    end

end
