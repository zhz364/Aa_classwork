# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email  (email) UNIQUE
#
class User < ApplicationRecord   #S . P. I. R. E.
    # 1
    validates :password_digest, :email, presence: true
    validates :session_token, presence: true, uniqueness: true
    
    # 2 validates password length, also allow for null
    validates :password, length: {minimum: 6, allow_nil:true} 

    # 3 password getter method 
    attr_reader :password 


    after_initialize :ensure_session_token

    # 4 password setter method  
    def password=(password)
        # set attr_reader to password
        @password = password
        # set passpord_digest to a HASH OBJECT
        self.password_digest = BCrypt::Password.create(password)
    end

    # 6 reset the session_token \ save / return new token 
    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    # 7 find_by_credentials
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            return user 
        else
            return nil 
        end
    end

    # 8 is_password? BUILD PW OBJECT and compare to the password_digset
    # PW digest is saving a STRING
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
                                                   # ^^ BCrypt method
    end


    # 5 session_token private
    private
    def ensure_session_token 
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
