class User < ApplicationRecord
  has_one :profile
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  def index
  end
  def register
    @user = User.new
    @user.first_name = params[:first_name]
    @user.email = params[:email]

    if @user.save
      cookies[:user_id] = @user.id
      render plain: 'Thank you #{@user.first_name}. You have successfully registered!'
    else
      render plain: 'Could not save user'
    end
  end
end
