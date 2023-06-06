class VendingMachineSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :inventories
  # has_many :snacks
end
