class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        byebug
        render json: user
    end

    private

    # error handling
    def render_unprocessable_entity(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end

    # strong params
    def user_params
        params.permit(:username, :password)
    end

end