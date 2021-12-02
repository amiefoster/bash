# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "👩👱‍♀️👱‍♂️🧔Seeding Users..."

User.create!([
    {
        name: "Amie Foster ", 
        username: "afoster", 
        password: "password", 
        image: "https://media-exp1.licdn.com/dms/image/C5603AQHPJYz2Vn6kzg/profile-displayphoto-shrink_800_800/0/1631314484075?e=1643846400&v=beta&t=XnxUvGuGxsHxW3AoYMH89PMhjejoIijQeEh9ve54eIs", 
        bio: "I'm Amie! I love true crime and code! Cant wait to make some planz!"
    }, 
    {
        name: "Ashley Doan", 
        username: "adoan", 
        password: "password", 
        image: "Image", 
        bio: "Bio"
    }, 
    {
        name: "Courtney Doan", 
        username: "cdoan", 
        password: "password", 
        image: "Image", 
        bio: "Bio"
    }, 
    {
        name: "Alexa Bruington", 
        username: "abruington", 
        password: "password", 
        image: "Image", 
        bio: "Bio"
    }, 
    {
        name: "Carrie Bradshaw", 
        username: "cbradshaw", 
        password: "password", 
        image: "Image", 
        bio: "Bio"
    }, 
    {
        name: "Samantha Jones", 
        username: "sjones", 
        password: "password", 
        image: "Image", 
        bio: "Bio"
    }, 
    {
        name: "Charlotte York", 
        username: "cyork", 
        password: "password", 
        image: "Image", 
        bio: "Bio"
    }, 
    {
        name: "Miranda Hobbs", 
        username: "mhobbs", 
        password: "password", 
        image: "Image", 
        bio: "Bio"
    }, 
    {
        name: "Denise Fritts", 
        username: "dfritts", 
        password: "password", 
        image: "Image", 
        bio: "Bio"
    }, 
    {
        name: "John Snow", 
        username: "jsnow", 
        password: "password", 
        image: "Image", 
        bio: "Bio"
    }
])

puts "🎉🎉🎉Seeding Events..."

Event.create!([
    {
        name: "Birthday Party", 
        description: "Amies birthday party!", 
        location: "Mammoth, Ca", 
        date: "September 1-4", 
        user_id: 1
    }, 
    {
        name: "Bachelorette Party", 
        description: "Charlottes bachelorette party!", 
        location: "Miami, Fl", 
        date: "March 3-5", 
        user_id: 5
    }, 
    {
        name: "Girls weekend!", 
        description: "Lets get the gals together for a fun weekend!", 
        location: "Napa, Ca", 
        date: "Janurary 4-7", 
        user_id: 9
    }
])

#right not im not making the HOST a guest but maybe i will have to do that later on for ease on the front end
puts "🧑‍🤝‍🧑🧑‍🤝‍🧑🧑‍🤝‍🧑🧑‍🤝‍🧑Seeding Guests..."
Guest.create!([
    {
        user_id: 2, 
        event_id: 1
    }, 
    {
        user_id: 3, 
        event_id: 1
    }, 
    {
        user_id: 4, 
        event_id: 1
    }, 
    {
        user_id: 6, 
        event_id: 2
    }, 
    {
        user_id: 7, 
        event_id: 2
    }, 
    {
        user_id: 8, 
        event_id: 2
    }, 
    {
        user_id: 10, 
        event_id: 3
    }, 
    {
        user_id: 1, 
        event_id: 3
    }, 
    {
        user_id: 2, 
        event_id: 3
    }, 
    {
        user_id: 3, 
        event_id: 3
    }, 
    {
        user_id: 4, 
        event_id: 3
    }
])

puts "Seeding accommodations..."
Accommodation.create!([
    {
        name: "Airbnb", 
        address: "123 Winter Wassal Way" ,
        event_id: 1,
    },
    {
        name: "The Ritz-Carlton, South Beach", 
        address: "123 Surf St" ,
        event_id: 2,
    },
    {
        name: "Airbnb", 
        address: "123 Wine Lovers Ln" ,
        event_id: 3,
    }
])

puts "Seeding transportation..."
Transportation.create!([
    {
        mode: "Flight", 
        date: "March 3", 
        details: "F012", 
        guest_id: 6, 
        event_id: 2, 
    },
    {
        mode: "Flight", 
        date: "March 3", 
        details: "F012",  
        guest_id: 7, 
        event_id: 2, 
    },
    {
        mode: "Flight", 
        date: "March 3", 
        details: "F012",  
        guest_id: 8, 
        event_id: 2, 
    },
    {
        mode: "Flight", 
        date: "March 3", 
        details: "F012",  
        guest_id: 9, 
        event_id: 2, 
    },
    {
        mode: "Flight", 
        date: "Janurary 4", 
        details: "Z155", 
        guest_id: 10, 
        event_id: 3, 
    },
])

puts "Seeding activities..."
Activity.create!([
    {
        name: "Hot Springs", 
        description: "Lets go take a dip in some natural hot springs!", 
        event_id: "1", 
    }, 
    {
        name: "Horseback Ride", 
        description: "Sunset horseback ride around Horseshoe lake!", 
        event_id: "1", 
    }, 
    {
        name: "Spa", 
        description: "Private spa choose from facial or massage and wind down with the sauna!", 
        event_id: "2", 
    }, 
    {
        name: "Wine tasting", 
        description: "Private tour of infamous Andretti Windery.Lunch and tastings included in tour.", 
        event_id: "3", 
    }, 
    {
        name: "Dinner", 
        description: "Dinner at infamous Michelin Star restaurant, French Laundry.", 
        event_id: "3", 
    }
])

puts "Seeding expenses..."
Expense.create!([
    {
        name: "Horseback Ride", 
        details: "", 
        amount: 250.00, 
        guest_id: 1, 
        event_id: 1
    }, 
    {
        name: "Dinner", 
        details: "", 
        amount: 300.00, 
        guest_id: "5", 
        event_id: "2"
    }, 
    {
        name: "Ubers", 
        details: "", 
        amount: 100.00, 
        guest_id: 5, 
        event_id: 2
    }, 
    {
        name: "Airbnb", 
        details: "", 
        amount: 2000.00, 
        guest_id: 9, 
        event_id: 3
    }
])

puts "Seeding packing list..."
PackingList.create([
    {
        item: "Bathing suit", 
        event_id: "1"
    },
    {
        item: "Hiking bots", 
        event_id: "1"
    },
    {
        item: "Decorations", 
        event_id: "2"
    },
    {
        item: "Cash for drag brunch", 
        event_id: "2"
    },
    {
        item: "Nice outfit for dinner", 
        event_id: "3"
    },
    {
        item: "Sun hat", 
        event_id: "3"
    },
])