# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

meals = [
    {name: 'salad', meal_time: 'Lunch', day_id: 1},
    {name: 'twinkie', meal_time: 'Snack', day_id: 4}
]

days.each do |name|
    Day.create(name: name)
end

meals.each do |day|
    Meal.create(day)
end