class Event < ApplicationRecord
  belongs_to :user
  has_many :guests, dependent: :destroy
  has_many :accommodations
  has_many :activities
  has_many :transportations
  has_many :expenses
  has_many :packing_lists
end
