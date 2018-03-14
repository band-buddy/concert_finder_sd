class PublicController < ApplicationController
    def index
      @events = Event.for(params[:keyword_search]).parsed_response["events"]["event"]
    end

    def about
    end

    def terms
    end

    def privacy
    end

    def press
    end 

    def update
    end


end
