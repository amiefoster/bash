class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :date, :activities, :accommodations, :expenses, :packing_lists, :transportations
  has_one :user
  has_many :guests
end
