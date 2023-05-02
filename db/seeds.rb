# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
    {username: "Stephen", password: "123"},
    {username: "John", password: "456"},
    {username: "Maddie", password: "789"}
])

vending_machines = VendingMachine.create([
    {name: "Vending Machine 1", location: "Location 1", user: users.first},
    {name: "Vending Machine 2", location: "Location 2", user: users.first},
    {name: "Vending Machine 3", location: "Location 3", user: users.second}
])
