class UsersController < ApplicationController
    before_action :authorize, only: [:show]

    def index 
        users = User.all 
        render json: users 
    end

    def create
        signup = User.create!(user_params)
        session[:user_id] = signup.id
        render json: signup, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    private
    def user_params
        params.permit(:name, :username, :image, :bio, :password, :password_confirmation)
    end
    def authorize
        return render json: { error: "not authorized" }, status: :unauthorized unless session.include? :user_id
    end
    
end
