class UsersController < ApplicationController
    before_action :require_logged_in, only: [:index, :show, :edit, :update, :delete]
    def new
        @user = User.new
        render :new
    end

    def create 
        @user = User.create(user_params)
        if @user.save
            redirect_to cats_url
        else 
            render :new 
        end
    end

    private
    def user_params
        params.require(:user).permit(:user_name, :password)
    end
end
