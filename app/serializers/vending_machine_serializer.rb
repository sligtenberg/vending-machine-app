class VendingMachineSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :user
  has_many :snacks
end
