class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :date
  has_one :user
end
