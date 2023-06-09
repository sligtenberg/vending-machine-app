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

  # this route facilitates purchasing a snack. once currency has been added to 
  # the app, this route needs to facilitate the transfer of money from the buyer
  # to the seller, or prevent the sale. For now, all snacks are free for any user!
  def purchase
    inventory = Inventory.find(params[:id])
    inventory.update!(quantity: inventory.quantity - 1)
    render json: inventory
  end

  private

  def find_inventory
    @current_user.inventories.find(params[:id])
  end

  # strong params
  def inventory_params
    params.permit(:snack_id, :vending_machine_id, :quantity)
  end

end
