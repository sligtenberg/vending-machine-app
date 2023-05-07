class VendingMachine < ApplicationRecord
    belongs_to :user
    has_many :inventories
    has_many :snacks, through: :inventories

    validates :name, presence: true, uniqueness: true
end
