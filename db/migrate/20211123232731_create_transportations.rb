class CreateTransportations < ActiveRecord::Migration[6.1]
  def change
    create_table :transportations do |t|
      t.string :mode
      t.string :date
      t.string :details
      t.references :guest, null: false, foreign_key: true
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
