
class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :date, :end_date, :activities, :accommodations, :expenses, :packing_lists, :transportations, :orderedActivities, :imageUrl
  has_one :user
  has_many :guests

  def orderedActivities
    object.activities.order(:date)
  end

  def imageUrl
    if self.object.image.attached? 
      Rails.application.routes.url_helpers.url_for(self.object.image)
    end
  end
 
end
