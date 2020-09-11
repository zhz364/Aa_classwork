require 'rails_helper'

RSpec.describe UsersController, type: :controller do
    let(:user_params) do
            {
            user:{
                    username: "Will Smith",
                    password: "password"
            }}
    end
    let(:invalid_params) do
        {
            user:{
                    username: "",
                    password: ""
            }}
    end
    describe "GET#index" do
        it "will render all users" do 
            get :index
            expect(response).to render_template(:index)
        end
    end

    describe "POST#create" do
        context "with valid params" do 
            it "logs in user after created" do 
                # debugger
                post :create, params: user_params
                # debugger
                user = User.find_by(username: "Will Smith")
                # debugger
                expect(user.session_token).to eq(session[:session_token])
                # debugger
            
            end
        end
        context "with invalid params" do
            it "render new_user page" do
                post :create, params: invalid_params
                expect(response).to render_template(:new)
            end
            it "should return error messages" do
                post :create, params: invalid_params
                expect(flash.now[:errors]).to be_present
            end
        end
    end

    describe "GET#show" do
        it "renders to show page" do
            user_id = User.find_by(username: "Will Smith").id
            get :show, params: user_id
            expect(response).to render_template(:show) 
        end
    end

# ##### from articles_controller

#     test "should get new" do
#         get new_article_url
#         assert_response :success
#     end

#     test "should get edit" do
#         get edit_article_url(@article)
#         assert_response :success
#     end
    
#     test "should update article" do
#         patch article_url(@article), params: { article: {  } }
#         assert_redirected_to article_url(@article)
#     end
    
#     test "should destroy article" do
#         assert_difference('Article.count', -1) do
#           delete article_url(@article)
#         end
#     end
end
