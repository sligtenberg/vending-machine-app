class VendingMachinesController < ApplicationController

    # remove this line
    skip_before_action :authorize, only: [:index]

    def index
        render json: VendingMachine.all
    end
    
end
