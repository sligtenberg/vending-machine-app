class SnackSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :is_used

  def is_used
    self.object.inventories.length > 0
  end

end
