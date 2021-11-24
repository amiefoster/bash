class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.string :description
      t.string :location
      t.string :date

      t.timestamps
    end
  end
end
