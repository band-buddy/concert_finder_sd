class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
   skip_before_action :verify_authenticity_token

  before_action :configure_permitted_parameters, if: :devise_controller?

  def after_sign_in_path_for(resource)
    profile_path
  end

  protected
  def configure_permitted_parameters
     devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:username, :first_name, :last_name, :date_of_birth, :email, :password, :password_confirmation, :image, :remember_me) }
     devise_parameter_sanitizer.permit(:sign_in) { |u| u.permit(:login, :username, :first_name, :last_name, :date_of_birth, :email, :password, :image, :remember_me) }
     devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:username, :first_name, :last_name, :date_of_birth, :email, :password, :password_confirmation, :image, :current_password) }
  end
end
