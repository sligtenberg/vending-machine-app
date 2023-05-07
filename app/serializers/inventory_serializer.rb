class InventorySerializer < ActiveModel::Serializer
  attributes :id, :quantity, :snack_id, :vending_machine_id
end
