class CreateEventTables < ActiveRecord::Migration[5.1]
  def change
    create_table :event_tables do |t|
      t.string :title
      t.datetime :date
      t.string :venue
      t.string :eventful_identifier

      t.timestamps
    end
  end
end
