class CatsController < ApplicationController
    def index
        @cats = Cat.all 
        render :index
    end 

    def show
        @cat = Cat.find_by(id: params[:id])

        render :show
    end

    def new
        @cat = Cat.new

        render :new
    end

    def create #put debugger into here to see what our params are
        @cat = Cat.new(cat_params)

        if @cat.save
            redirect_to cat_url(@cat)
        else
            render :new
        end
    end

    def edit
        @cat = Cat.find(params[:id])
        render :edit
    end

     def update
        @cat = Cat.find(params[:id]) # find the user
        if @cat.update(cat_params)
            # redirect_to "/users/#{user.id}"
            redirect_to cat_url(@cat)
        else
            render json: @cat.errors.full_messages, status: 422
        end
    end


    private

    def cat_params
        params.require(:cat).permit(:birthdate, :color, :name, :sex, :description)
    end
end
