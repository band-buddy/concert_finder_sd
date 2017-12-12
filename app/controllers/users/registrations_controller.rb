class RegistrationsController < Devise::RegistrationsController
  # def register
  #   @user = User.new
  #   @user.username = params[:username]
  #   @user.first_name = params[:first_name]
  #   @user.last_name = params[:last_name]
  #   @user.phone = params[:phone]
  #   @user.date_of_birth = params[:date_of_birth]
  #   @user.email = params[:email]
  #   @user.description = params[:description]
  #
  #   if @user.save
  #     cookies[:user_id] = @user.id
  #     render plain: 'Thank you #{@user.first_name}. You have successfully registered!'
  #   else
  #     render plain: 'Could not save user'
  #   end
  # end


  private

  def sign_up_params
    params.require(:user).permit(:username, :first_name, :last_name, :date_of_birth, :email, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:username, :first_name, :last_name, :date_of_birth, :email, :password, :password_confirmation, :current_password)
  end
end
