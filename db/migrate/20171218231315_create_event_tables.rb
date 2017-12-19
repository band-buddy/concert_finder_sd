class CreateEventTables < ActiveRecord::Migration[5.1]
  def change
    create_table :event_tables do |t|
      t.string :index
      t.string :create

      t.timestamps
    end
  end
end
