require 'httparty'

class Event
  include HTTParty

  base_uri 'api.eventful.com'
  format :json

  def self.for term
    result = get("/json/events/search", query: { app_key: 'SBL9c4NK96vvmZKQ', l:'San Diego', t: 'future', c: 'music', page_size: '100', q: term}){"event"}
  end
end
