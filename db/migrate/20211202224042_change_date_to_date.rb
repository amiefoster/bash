class ChangeDateToDate < ActiveRecord::Migration[6.1]
  def change
    remove_column :activities, :date, :string
  end
end
