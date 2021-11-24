class CreatePackingLists < ActiveRecord::Migration[6.1]
  def change
    create_table :packing_lists do |t|
      t.string :item
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
