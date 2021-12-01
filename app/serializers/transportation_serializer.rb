class TransportationSerializer < ActiveModel::Serializer
  attributes :id, :mode, :date, :details, :nameOfUser

  def nameOfUser
    object.guest.user.name
  end

end

