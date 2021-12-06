class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :image, :bio, :all_events, :guests, :events

  has_many :events

  def all_events
    object.events.collect do |i|
      i.name + " on " + i.date
    end
  end
end
