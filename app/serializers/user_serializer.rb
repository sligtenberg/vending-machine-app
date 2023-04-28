class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :vending_machines
end
