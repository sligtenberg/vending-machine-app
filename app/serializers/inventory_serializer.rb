class InventorySerializer < ActiveModel::Serializer
  attributes :id, :snack_name, :vending_machine_name, :quantity

  def snack_name
    Snack.find(self.object.snack_id).name
  end

  def vending_machine_name
    VendingMachine.find(self.object.vending_machine_id).name
  end

end
