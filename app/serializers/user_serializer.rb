class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :image, :bio, :ordered_events, :guests, :events

  has_many :events

  def ordered_events
    object.events.order(:date).reverse_order
  end

end
