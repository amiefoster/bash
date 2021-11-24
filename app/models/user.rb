class User < ApplicationRecord
    has_secure_password
    has_many :events, dependent: :destroy
    has_many :guests

    PASSWORD_REQUIREMENTS = /(
    {?=.{8,}}
    {?=.*\d}
    {?=.*[a-z]}
    {?=.*[A-Z]}
    {?=.*[[:^alnum:]]}
    )/x
    
    validates :username, uniqueness: true
    validates :name, :username, :password, :bio, presence: true
    validates :password, length: { minimum: 8 }
    validates :password, format: PASSWORD_REQUIREMENTS
end
