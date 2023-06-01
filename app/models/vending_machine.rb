class VendingMachine < ApplicationRecord
    belongs_to :user
    has_many :inventories
    has_many :snacks, through: :inventories

    validates :name, presence: true, uniqueness: true
    validates :inventories, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 12 }
end
