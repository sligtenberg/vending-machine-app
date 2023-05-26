class UsersController < ApplicationController
    #wrap_parameters format: [] # not sure what this is or why we need it?

    skip_before_action :authorize, only: [:create, :index, :show]

    # for development purposes - should remove this action later
    # also need to remove index from skip_bfore_action arguments
    def index
        render json: User.all, include: ['vending_machines', 'vending_machines.inventories']
    end

    # create a new user and make a session for them
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, include: ['vending_machines', 'vending_machines.inventories']
        else
            render json: { errors: ["Log in or sign up to vend"] }, status: :unauthorized
        end
    end

    private

    # strong params
    def user_params
        params.permit(:username, :password)
    end

end
