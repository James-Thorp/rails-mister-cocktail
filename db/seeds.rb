# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'json'
require 'open-uri'
Ingredient.destroy_all
url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
ingredients = open(url).read
ingredients_JSON = JSON.parse(ingredients)

ingredients_JSON["drinks"].each do |ingredient_hash|
  name = ingredient_hash["strIngredient1"]
  Ingredient.create!(name: name)
end



Ingredient.create(name: "lemon")
Ingredient.create(name: "ice")
Ingredient.create(name: "mint leaves")
Ingredient.create(name: "rum")
Ingredient.create(name: "vodka")
Ingredient.create(name: "whiskey")
