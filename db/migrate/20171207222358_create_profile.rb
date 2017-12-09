class CreateProfile < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.date :date_of_birth
      t.string :description
    end
  end
end
