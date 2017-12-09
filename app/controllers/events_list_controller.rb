require 'httparty'
require 'pp'

class EventsListController < ApplicationController

  def events
    @events = Event.new
    pp Event.for params[:keyword_search]
  end

  def index
    @events = Event.new
  end
end

# EventfulApi.configure do |config|
#   config.application_key = SBL9c4NK96vvmZKQ
#   config.consumer_key = b9fb6a3fc07ed50e36c1
#   config.consumer_secret = 3f241dccb09b03cf43c8
# end

# general format: http://api.eventful.com/yaml/events/search?app_key=SBL9c4NK96vvmZKQ&q=music&l=San+Diego
# format to get multiple events in san diego:
# http://api.eventful.com/yaml/events/search?app_key=SBL9c4NK96vvmZKQ&q=music&l=San+Diego
# format to get up to 50 music events for today in San Diego:
# http://api.eventful.com/yaml/events/search?app_key=SBL9c4NK96vvmZKQ&q=music&l=San+Diego&t=today&c=music&page_size=50
