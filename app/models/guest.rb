class Guest < ApplicationRecord
  belongs_to :user
  belongs_to :event
  has_one :transportation
  has_many :expenses
end
