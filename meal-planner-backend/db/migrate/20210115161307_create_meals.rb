class CreateMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :meal_time
      t.references :day, null: false, foreign_key: true

      t.timestamps
    end
  end
end
