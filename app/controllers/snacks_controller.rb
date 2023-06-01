class SnacksController < ApplicationController

    def index
        render json: Snack.all
    end

    def create
        snack = Snack.create!(snack_params)
        render json: snack, status: :created
    end

    private

    # strong params
    def snack_params
        params.permit(:name, :price)
    end


end
