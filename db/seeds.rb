# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: "Stephen")
User.create!(username: "Robert")
User.create!(username: "Jackie")
User.create!(username: "John")
User.create!(username: "Maddie")

VendingMachine.create!(name: "Vending Machine 1", location: "Location 1", user_id: 1)
VendingMachine.create!(name: "Vending Machine 2", location: "Location 2", user_id: 1)
VendingMachine.create!(name: "Vending Machine 3", location: "Location 3", user_id: 2)
