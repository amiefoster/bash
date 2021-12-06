class User < ApplicationRecord
    has_secure_password
    has_many :guests
    has_many :events, through: :guests, dependent: :destroy
    
    validates :username, uniqueness: true
    validates :name, :username, :password, :bio, presence: true
    validates :password, length: { minimum: 8 }
end
