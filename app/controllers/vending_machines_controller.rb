class VendingMachinesController < ApplicationController

  def index
    render json: VendingMachine.all
  end

  def create
    vending_machine = VendingMachine.create!(vending_machine_params)
    render json: vending_machine, status: :created
end

def destroy
    find_vending_machine.destroy
    head :no_content
end

private

def find_vending_machine
    VendingMachine.find(params[:id])
end

# strong params
def vending_machine_params
    params.permit(:name, :user_id)
end

end
