class DeleteDateFromActivities < ActiveRecord::Migration[6.1]
  def change
    remove_column :activities, :date, :date

  end
end
