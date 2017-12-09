class PublicController < ApplicationController
  # before_action :authenticate_user!
    def index
    end

    def about
    end

    def update
      def register
        @user = User.new
        @user.username = params[:username]
        @user.first_name = params[:first_name]
        @user.last_name = params[:last_name]
        @user.date_of_birth = params[:date_of_birth]
        @user.email = params[:email]

        if @user.save
          cookies[:user_id] = @user.id
          render plain: 'Thank you #{@user.first_name}. You have successfully registered!'
        else
          render plain: 'Could not save user'
        end
      end
    end
end
