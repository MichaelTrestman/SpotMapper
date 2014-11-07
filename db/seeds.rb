# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

    # t.string  "title"
    # t.integer "list_id"
    # t.string  "description"
    # t.decimal "lat"
    # t.decimal "lng"
    # t.string  "address"
    # t.text    "pov"
    # t.string  "link"
    # var crazyVolcanoPlace ={"position":{"k":42.497667,"B":141.14683300000002},"pov":{"heading":108.15742692732572,"pitch":12.716486667265169}}



    3.times do
      title = Faker::Lorem.sentence(rand(6))
      description = Faker::Lorem.paragraph(rand(6))
      list = List.create({title: title, description: description})

        3.times do
          title = Faker::Lorem.sentence(rand(6))
          description = Faker::Lorem.paragraph(rand(6))
          list.spots << Spot.create({title: title, description: description})
        end

    end
