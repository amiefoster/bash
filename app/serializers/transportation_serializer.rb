class TransportationSerializer < ActiveModel::Serializer
  attributes :id, :mode, :date, :details
end
