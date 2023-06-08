class InventorySerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :vending_machine_id, :snack_id

  def name
    Snack.find(self.object.snack_id).name
  end

  def price
    Snack.find(self.object.snack_id).price
  end

end
