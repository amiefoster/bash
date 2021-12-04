
class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :date, :activities, :accommodations, :expenses, :packing_lists, :transportations, :orderedActivities
  has_one :user
  has_many :guests

  def orderedActivities
    object.activities.order(:date)
  end
 
end
