class VendingMachineSerializer < ActiveModel::Serializer
  attributes :id, :name, :location

  belongs_to :user
end
