class VendingMachineSerializer < ActiveModel::Serializer
  attributes :id, :name #, :inventories

  has_many :inventories
  # has_many :snacks
end
