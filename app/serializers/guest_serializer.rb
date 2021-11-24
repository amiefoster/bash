class GuestSerializer < ActiveModel::Serializer
  attributes :id, :user, :event_name
  has_one :user

  def event_name
    object.event.name
  end

end
