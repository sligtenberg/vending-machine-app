class Inventory < ApplicationRecord
    belongs_to :snack
    belongs_to :vending_machine

    validates :quantity, comparison: { greater_than_or_equal_to: 0 }
end
