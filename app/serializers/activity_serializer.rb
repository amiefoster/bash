class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :date, :time
end
