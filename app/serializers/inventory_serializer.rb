class InventorySerializer < ActiveModel::Serializer
  attributes :id, :quantity, :snack_id, :vending_machine_id

  # def vending_machine_name
  #   byebug
  # end
end
