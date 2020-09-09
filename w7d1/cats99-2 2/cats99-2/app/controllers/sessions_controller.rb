class SessionsController < ApplicationController
    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:user_name],
            params[:user][:password])
        if @user 
            login!(@user)
            redirect_to cats_url
        else 
            render :new
        end
    end

    def destroy
        logout! 
        redirect_to new_session_url
    end


end



# Use current_user to implement SessionsController#destroy.
# Call #reset_session_token! on current_user to invalidate the old token, but only if there is a current_user. Invalidating the old token guarantees that no one can login with it. This is good practice in case someone has stolen the token.
# Blank out :session_token in the session hash.