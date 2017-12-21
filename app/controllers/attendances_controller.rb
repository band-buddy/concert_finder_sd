class AttendancesController < ApplicationController
  def create
    # set curernt user
    @user = current_user

    # save event to the eventTable
    @event = EventTable.where(title:params["title"], date:params["date"], venue:params["venue"], eventful_identifier:params["eventful_identifier"]).first_or_create

    # save the event to the user event_table
    @user.event_tables << @event

    # @created_att = Attendances.new
    # @created_att.user_id = current_user.id
    # @created_att.event_table_id = @event.id
    # byebug
    # @attendance = Attendances.where(event_table_id:params["eventful_identifier"])
    # @attendance.user_id = current_user.id
    # @attendance.save
  end



end
