class ChangePriceToBeFloatInSnacks < ActiveRecord::Migration[6.1]
  def change
    change_column :snacks, :price, :float
  end
end
