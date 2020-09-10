class ApplicationController < ActionController::Base
    #  C. R. L. L. L.
    skip_before_action :verify_authenticity_token

    helper_method :current_user, :logged_in?, :loggout!

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end
 
    def require_log_in
       redirect to new_session_url unless logged_in?
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def loggout!
        if logged_in?
            @current_user.reset_session_token!
            session[:session_token] = nil
            @current_user = nil
        end

    end

    def logged_in?
        !!@current_user
    end
end
