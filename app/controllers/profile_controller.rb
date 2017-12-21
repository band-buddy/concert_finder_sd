class ProfileController < ApplicationController
  before_action :set_user, only: [:index, :update, :update_logic]
  before_action :authenticate_user!
  before_action :user_params, only: [:update_logic]

  def index

    params.permit(:username, :first_name, :last_name, :date_of_birth, :phone_number, :email, :description, :image, :utf8, :_method, :authenticity_token, :commit)
    @user = current_user
    @events = @user.event_tables.each

    render 'profile.html.erb'
  end

  def update
    @user = current_user

    if user_params
      @user.update(user_params)
      @user.save
    end
    if params.has_key?(:username)
      @user.update(username: params[:username])
      @user.save
    end
    if params.has_key?(:first_name)
      @user.update(first_name: params[:first_name])
      @user.save
    end
    if params.has_key?(:last_name)
      @user.update(last_name: params[:last_name])
      @user.save
    end
    if params.has_key?(:date_of_birth)
      @user.update(date_of_birth: params[:date_of_birth])
      @user.save
    end
    if params.has_key?(:phone_number)
      @user.update(phone_number: params[:phone_number])
      @user.save
    end
    if params.has_key?(:email)
      @user.update(email: params[:email])
      @user.save
    end
    if params.has_key?(:description)
      @user.update(description: params[:description])
      @user.save
    end
    if params.has_key?(:image)
     @user.update(image: params[:image])
     @user.save
    end

  end

  def update_logic
    params.permit(:username, :first_name, :last_name, :date_of_birth, :phone_number, :email, :description, :image, :utf8, :_method, :authenticity_token, :commit)
    respond_to do |format|
      if @user.update(user_params)
        @user.save
        format.html { redirect_to profile_path, notice: 'Profile was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end


  def profile

  end
end

private

def set_user
  @user = current_user
end

def user_params
  params.permit(:username, :first_name, :last_name, :date_of_birth, :phone_number, :email, :description, :image)
end
