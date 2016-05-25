# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# 初期データ
Message.delete_all
Message.create!([
    { user: 'Tom', text: 'Good morning'},
    { user: 'John', text: 'Good afternoon'},
    { user: 'Tom', text: 'Good evening'}
])
