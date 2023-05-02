class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        byebug
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password, :email)
    end

end
