class ProfileController < ApplicationController
  before_action :authenticate_user!
  def index
    render 'profile.html.erb'
  end
end
