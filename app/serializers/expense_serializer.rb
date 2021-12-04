class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :name, :details, :amount, :guest_id, :nameOfGuest

  def nameOfGuest
    object.guest.user.name
  end

end
