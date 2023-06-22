class InventorySerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :vending_machine_id, :snack_id, :vending_machine_name

  def name
    Snack.find(self.object.snack_id).name
  end

  def price
    Snack.find(self.object.snack_id).price
  end

  def vending_machine_name
    VendingMachine.find(self.object.vending_machine_id).name
  end

end
