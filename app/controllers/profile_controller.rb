class ProfileController < ApplicationController
  before_action :authenticate_user!
  before_action :user_params
  def index
    params.permit(:username, :first_name, :last_name, :date_of_birth, :phone_number, :email, :description, :utf8, :_method, :authenticity_token, :commit)
    @user = current_user
    render 'profile.html.erb'
  end

  def update
    @user = current_user

    if user_params
      @user.update(user_params)
      @user.save
      redirect_to profile_path
    end
    #   @user.update(username: params[:username])
    #   @user.save
    #   redirect_to profile_path
    # end
    # if params.has_key?(:first_name)
    #   @user.update(first_name: params[:first_name])
    #   @user.save
    #   redirect_to profile_path
    # end
    # if params.has_key?(:last_name)
    #   @user.update(last_name: params[:last_name])
    #   @user.save
    #   redirect_to profile_path
    # end
    # if params.has_key?(:date_of_birth)
    #   @user.update(date_of_birth: params[:date_of_birth])
    #   @user.save
    #   redirect_to profile_path
    # end
    # if params.has_key?(:phone_number)
    #   @user.update(phone_number: params[:phone_number])
    #   @user.save
    #   redirect_to profile_path
    # end
    # if params.has_key?(:email)
    #   @user.update(email: params[:email])
    #   @user.save
    #   redirect_to profile_path
    # end
    # if params.has_key?(:description)
    #   @user.update(description: params[:description])
    #   @user.save
    #   redirect_to profile_path
    # end
    # if params.has_key?(:image)
    #  @user.update(image: params[:image])
    #  @user.save
    #  redirect_to profile_path
    # end
    #
    # if @user.save
    # end
  end

  def redirect
    @user.save
    redirect_to '/profile'
  end

  def profile

  end
end

private

def user_params
  params.permit(:username, :first_name, :last_name, :date_of_birth, :phone_number, :email, :description, :utf8, :_method, :authenticity_token, :commit)
end
