class UsersController < ApplicationController
    #wrap_parameters format: [] # not sure what this is or why we need it?

    skip_before_action :authorize, only: [:create, :index]

    # for development purposes - should remove this action later
    # also need to remove index from skip_bfore_action arguments
    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: User.find_by(id: session[:user_id])
    end

    private

    # strong params
    def user_params
        params.permit(:username, :password)
    end

end
