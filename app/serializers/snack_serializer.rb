class SnackSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :in_use

  def in_use
    self.object.inventories.length > 0
  end

end
