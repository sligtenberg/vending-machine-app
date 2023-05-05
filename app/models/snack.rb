class Snack < ApplicationRecord
    validates :name, presence: true, uniqueness: true
end
