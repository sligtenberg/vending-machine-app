class VendingMachineSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :snacks
  has_many :inventories
end
