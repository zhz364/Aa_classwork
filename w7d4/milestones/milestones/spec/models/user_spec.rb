require 'rails_helper'


RSpec.describe User, type: :model do

    it { should validate_presence_of(:username)}
    it { should validate_uniqueness_of(:username)}

    it { should validate_presence_of(:session_token)}
    it { should validate_uniqueness_of(:session_token)}

    it { should validate_presence_of(:password_digest)}
    it { should validate_length_of(:password).is_at_least(6)}

    subject(:sethb) {
        User.create(username:"SethB",password: "password")
    }

    describe "password" do
        it "does not save password to database" do
            FactoryBot.create(:user,username: "Will Smith")
            user = User.find_by(username: "Will Smith")
            expect(user.password).not_to eq("password")
        end

        it "password uses BCrypt" do
            expect(BCrypt::Password).to receive(:create).with("password")
            FactoryBot.build(:user, password: "password")
        end
    end

    describe "User::find_by_credentials" do
        it "finds user instance with string username and password" do
            FactoryBot.build(:user,username: "Will Smith", password:"password")
            expect(User.find_by_credentials("Will Smith", "password")).to eq(User.find_by(username: "Will Smith"))
        end

        it "return nil if user is not in database" do
            expect(User.find_by(username:"zhang")).to be_nil
        end
    end

    describe "User# password=" do
        it "sets the password_digest to bcrypt string" do
            expect(BCrypt::Password).to receive(:create).with("password")
            FactoryBot.create(:user,username: "Will Smithy", password:"password")
            user = User.find_by(username: "Will Smithy")
            expect(user.password_digest).not_to eq('password')
        end

        it "sets instance variable for @password" do
            user = FactoryBot.build(:user,username: "Will Smith", password:"password")
            expect(user.password).to eq("password")
        end
    end

    describe "User#is_password?" do
        it "verify user's password_digest with the password" do
            user = FactoryBot.build(:user,username: "Will Smith", password:"password")
            expect(user.is_password?("password")).to be true
        end
    end

    describe "User#reset_session_token!" do
        subject(:user1) {User.create(username:"zhang", password: "password", session_token: "abcd1234")}
        
        it "Should use SecureRandom" do 
            
            # expect(User).to receive(:generate_session_token)
            expect(SecureRandom).to receive(:urlsafe_base64)
            user1.reset_session_token!
        end

        it "Should reset user.session_token" do
            token1 = user1.reset_session_token!
            expect(token1).not_to eq('abcd1234')
        end
    end

    describe "User#ensure_session_token" do
        subject(:user1) {User.create(username:"zhang", password: "password", session_token: "abcd1234")}

        it "Should give the user a new session token" do 
            FactoryBot.build(:user, username: "Uncle Phil", password: "passowrd")
        end

        it "Should not overwrite a session token if one is present" do
            expect(user1.session_token).to eq("abcd1234")
        end
    end

end