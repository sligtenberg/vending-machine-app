class Snack < ApplicationRecord
    has_many :inventories
    has_many :vending_machines, through: :inventories
    
    validates :name, presence: true, uniqueness: true
end
