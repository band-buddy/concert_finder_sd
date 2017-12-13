class MapsController < ApplicationController
  def index
    @google_api_key = 'AIzaSyBWMXTmFCMQZvmvghIzaarcV7EeNKd0h3w'
    @map_center = [32.7096298,-117.1602029]
    @map_zoom= 18
  end
end
