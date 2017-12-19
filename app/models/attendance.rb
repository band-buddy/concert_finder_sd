class Attendance < ApplicationRecord
  belongs_to :event_table
  belongs_to :user
end
