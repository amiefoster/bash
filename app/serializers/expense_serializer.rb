class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :name, :details, :amount
end
