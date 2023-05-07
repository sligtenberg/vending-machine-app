class CreateInventories < ActiveRecord::Migration[6.1]
  def change
    create_table :inventories do |t|
      t.integer :quantity
      t.integer :snack_id
      t.integer :vending_machine_id

      t.timestamps
    end
  end
end
