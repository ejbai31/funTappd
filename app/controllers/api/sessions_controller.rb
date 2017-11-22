class Api::SessionsController < ApplicationController
    def create 
    end

    def destroy
      @user = current_user
      if @user
        logout
        render 'api/users/show'
      else
        render json: ["Not logged in"], status: 404
      end
  end
end
