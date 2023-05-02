class User < ApplicationRecord
    has_many :vending_machines

    has_secure_password
end
