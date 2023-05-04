class UsersController < ApplicationController
    #wrap_parameters format: [] # not sure what this is or why we need it?
    
    skip_before_action :authorize, only: :create

    # for development purposes - should remove this action later
    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    private

    # strong params
    def user_params
        params.permit(:username, :password)
    end

end
