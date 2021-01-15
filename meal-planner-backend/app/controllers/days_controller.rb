class DaysController < ApplicationController
    def index
        @days = Day.all
        render json: @days.to_json(include: :meals)
    end
end
