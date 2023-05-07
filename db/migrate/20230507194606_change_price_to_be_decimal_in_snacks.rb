class ChangePriceToBeDecimalInSnacks < ActiveRecord::Migration[6.1]
  def change
    change_column :snacks, :price, :decimal
  end
end
