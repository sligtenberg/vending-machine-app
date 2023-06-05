class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create, :show]

    # for development purposes - should remove this action later
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
        user = find_user
        if user
            render json: user
        else
            render json: { errors: ["Log in or sign up to vend"] }, status: :unauthorized
        end
    end

    def vending_machines
        render json: find_user.vending_machines
    end

    private

    def find_user
        user = User.find_by(id: session[:user_id])
    end

    # strong params
    def user_params
        params.permit(:username, :password)
    end

end
