class InventoriesController < ApplicationController

    skip_before_action :authorize, only: [:index]

    # for development purposes - should remove this action later
    # also need to remove index from skip_bfore_action arguments
    def index
        render json: Inventory.all
    end

end
