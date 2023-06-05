class SnacksController < ApplicationController

    def index
        render json: Snack.all
    end

    def create
        snack = Snack.create!(snack_params)
        render json: snack, status: :created
    end

    def destroy
        find_snack.destroy
        head :no_content
    end

    private

    def find_snack
        Snack.find(params[:id])
    end

    # strong params
    def snack_params
        params.permit(:name, :price)
    end

end
