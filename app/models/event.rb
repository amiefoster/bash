class Event < ApplicationRecord
  belongs_to :user
  has_many :guests, dependent: :destroy
  has_many :accommodations, dependent: :destroy
  has_many :activities, dependent: :destroy
  has_many :transportations, dependent: :destroy
  has_many :expenses, dependent: :destroy
  has_many :packing_lists, dependent: :destroy

  validates :name, :location, :date, presence: true
end
