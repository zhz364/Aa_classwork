class UsersController < ApplicationController   
# 1 use form to get params 
# 2 create a new instance user with params
# 3 try to save the user to db
# $ login. redirect, show errors

    def create
        @user = User.new(params.require(:user).permit(:email, :password))

        if @user.save!
          #  login!(@user)
          render :index
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end


    def index
        @users = User.all
        render :index
    end


    def new
        @user = User.new

        render :new
    end


    def update
        @user = User.find_by(params[:id])
    end


    def destroy
    end

end
