class MapsController < ApplicationController
  def index
    @google_api_key = 'AIzaSyCMyT0uK5LGOLznJdWrMPNZ0R3aHh2lkFo'
    @map_center = [32.7096298,-117.1602029]
    @map_zoom= 18
  end
end
