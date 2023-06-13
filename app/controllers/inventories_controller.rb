class InventoriesController < ApplicationController
    def create
        inventory = Inventory.create!(inventory_params)
        render json: inventory, status: :created
    end

    def update
      inventory = find_inventory
      inventory.update!(inventory_params)
      render json: inventory
    end

    def destroy
        find_inventory.destroy
        head :no_content
    end

    private

    def find_inventory
        Inventory.find(params[:id])
    end

    # strong params
    def inventory_params
        params.permit(:snack_id, :vending_machine_id, :quantity)
    end

end
