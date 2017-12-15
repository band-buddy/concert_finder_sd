class PublicController < ApplicationController
  # before_action :authenticate_user!
    def index
      @events = Event.for(params[:keyword_search]).parsed_response["events"]["event"]
    end

    def about
    end

    def update

    end
end
