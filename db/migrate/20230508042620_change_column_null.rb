class ChangeColumnNull < ActiveRecord::Migration[6.1]
  def change
    change_column_null(:inventories, :quantity, false)
    change_column_null(:inventories, :snack_id, false)
    change_column_null(:inventories, :vending_machine_id, false)
    change_column_null(:inventories, :quantity, false)

    change_column_null(:snacks, :name, false)
    change_column_null(:snacks, :price, false)

    change_column_null(:users, :username, false)
    change_column_null(:users, :password_digest, false)

    change_column_null(:vending_machines, :name, false)

    remove_column :vending_machines, :location
  end
end
