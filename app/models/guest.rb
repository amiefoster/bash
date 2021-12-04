class Guest < ApplicationRecord
  belongs_to :user
  belongs_to :event
  has_one :transportation, dependent: :destroy
  has_many :expenses, dependent: :destroy

  validates :user_id, presence: true
  validates :event_id, presence: true
end
