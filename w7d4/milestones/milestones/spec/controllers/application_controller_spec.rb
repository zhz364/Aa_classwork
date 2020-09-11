require 'rails_helper'

RSpec.describe ApplicationController, type: :controller do
    let (:user1) {
        User.create(username: "Pikacahu",password:"password123", session_token: "helloworld")
    }
    describe "#current_user" do
        it "select current_user by session_token" do 
            
        end
    end

end