class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :eventful_id
      t.string :title
      t.string :venue_name
      t.string :venue_address
      t.string :city_name
      t.string :country_abbr
      t.string :postal_code
      t.string :description
      t.date :start_time

      t.timestamps null: false
    end
  end
end
