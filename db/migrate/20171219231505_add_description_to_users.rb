class AddDescriptionToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :description, :varchar
  end
end
