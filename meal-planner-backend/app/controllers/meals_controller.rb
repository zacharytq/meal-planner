class MealsController < ApplicationController
    def create
        meal = Meal.create(day_id: params[:day_id], meal_time: params[:meal_time], name: params[:name])
        render json: meal
    end

    def destroy
        Meal.delete_all
    end
end
