class AddEventTableRefToAttendance < ActiveRecord::Migration[5.1]
  def change
    add_reference :attendances, :event_table, foreign_key: true
  end
end
