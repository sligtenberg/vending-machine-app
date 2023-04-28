class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :vending_machines
end
