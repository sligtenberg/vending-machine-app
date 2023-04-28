class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def create
        byebug
    end

end
