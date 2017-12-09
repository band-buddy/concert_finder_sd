class AddUserInfo < ActiveRecord::Migration[5.1]
  def change
    change_table :users do |t|
      add_column :users, :username, :string, unique: true
      add_column :users, :first_name, :string
      add_column :users, :last_name, :string
      add_column :users, :date_of_birth, :date
    end
  end
end
