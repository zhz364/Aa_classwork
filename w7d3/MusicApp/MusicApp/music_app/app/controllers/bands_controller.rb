class BandsController < ApplicationController
    def create
        @band = Band.new(params.require(:band).permit(:name))
        if @band.save!
          #  login!(@user)
          render :show
        else
            flash.now[:errors] = @band.errors.full_messages
            render :new
        end
    end

    def index
        @bands = Band.all
        render :index
    end

    def new
        @band = Band.new
        render :new
    end


    def edit
        render :update
    end

    def update
        @band = Band.find_by(params[:id])
        @band.update(params.require(:band).permit(:name))
        @band.save!
        render :show
    end


    def destroy
    end

end

