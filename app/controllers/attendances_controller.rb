class AttendancesController < ApplicationController
  def create
    # set curernt user
    if current_user.nil?
      @user = nil
    else
      @user = current_user
    end

    # save event to the eventTable
    @event = EventTable.where(title:params["title"], date:params["date"], venue:params["venue"], eventful_identifier:params["eventful_identifier"]).first_or_create

    # save the event to the user event_table
    if @user != nil
      @user.event_tables << @event unless @user.event_tables.include?(@event)
    else
      redirect_to "/user/login"
    end
  end
end
