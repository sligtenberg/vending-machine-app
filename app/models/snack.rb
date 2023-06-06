class Snack < ApplicationRecord
    has_many :inventories
    has_many :vending_machines, through: :inventories
    
    validates :name, presence: true, uniqueness: true
    validates :price, numericality: { greater_than: 0 }
end
