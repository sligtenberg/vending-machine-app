class CreateVendingMachines < ActiveRecord::Migration[6.1]
  def change
    create_table :vending_machines do |t|
      t.string :name
      t.string :location
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
