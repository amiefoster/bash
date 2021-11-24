class Guest < ApplicationRecord
  belongs_to :user
  belongs_to :event
  has_one :transportation
  has_many :expenses

  validates :user_id, presence: true
  validates :event_id, presence: true
end
