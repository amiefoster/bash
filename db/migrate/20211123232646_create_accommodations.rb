class CreateAccommodations < ActiveRecord::Migration[6.1]
  def change
    create_table :accommodations do |t|
      t.string :name
      t.string :address
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
