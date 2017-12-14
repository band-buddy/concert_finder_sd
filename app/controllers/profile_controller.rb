class ProfileController < ApplicationController
  before_action :authenticate_user!
  def index
    params.permit(:usename, :first_name, :last_name, :date_of_birth, :phone_number, :email, :description)
    @user = current_user

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
    render 'profile.html.erb'
  end

  def update
    @user = current_user

  end

  def profile

  end
end
