class AddTimeToActivities < ActiveRecord::Migration[6.1]
  def change
    add_column :activities, :time, :string
  end
end
