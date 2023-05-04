class User < ApplicationRecord
    has_many :vending_machines

    has_secure_password

    validates :name, presence: true, uniqueness: true
end
