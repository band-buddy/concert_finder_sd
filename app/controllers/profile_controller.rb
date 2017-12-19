class ProfileController < ApplicationController
  before_action :set_user, only: [:index, :update, :update_logic]
  before_action :authenticate_user!
  before_action :user_params, only: [:update_logic]

  def index
    render 'profile.html.erb'
  end

  # def update
  #   if user_params
  #     @user.update(user_params)
  #     @user.save
  #     redirect_to profile_path
  #   end
  #     @user.update(username: params[:username])
  #     @user.save
  #     redirect_to profile_path
  #   end
  #   if params.has_key?(:first_name)
  #     @user.update(first_name: params[:first_name])
  #     @user.save
  #     redirect_to profile_path
  #   end
  #   if params.has_key?(:last_name)
  #     @user.update(last_name: params[:last_name])
  #     @user.save
  #     redirect_to profile_path
  #   end
  #   if params.has_key?(:date_of_birth)
  #     @user.update(date_of_birth: params[:date_of_birth])
  #     @user.save
  #     redirect_to profile_path
  #   end
  #   if params.has_key?(:phone_number)
  #     @user.update(phone_number: params[:phone_number])
  #     @user.save
  #     redirect_to profile_path
  #   end
  #   if params.has_key?(:email)
  #     @user.update(email: params[:email])
  #     @user.save
  #     redirect_to profile_path
  #   end
  #   if params.has_key?(:description)
  #     @user.update(description: params[:description])
  #     @user.save
  #     redirect_to profile_path
  #   end
  #   if params.has_key?(:image)
  #    @user.update(image: params[:image])
  #    @user.save
  #    redirect_to profile_path
  #   end
  #
  #   if @user.save
  #   end
  # end

  def update_logic
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to profile_path, notice: 'Profile was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
    @user.save
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
