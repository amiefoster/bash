# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "👤👤👤 Seeding Users... 👤👤👤"

User.create!([
    {
        name: "Amie Foster ", 
        username: "afoster", 
        password: "Password1!", 
        image: "https://media-exp1.licdn.com/dms/image/C5603AQHPJYz2Vn6kzg/profile-displayphoto-shrink_800_800/0/1631314484075?e=1643846400&v=beta&t=XnxUvGuGxsHxW3AoYMH89PMhjejoIijQeEh9ve54eIs", 
        bio: "I'm Amie! I love true crime and code! Cant wait to make some planz!"
    }, 
    {
        name: "Ashley Doan", 
        username: "adoan", 
        password: "Password1!", 
        image: "Image", 
        bio: "Bio"
    }, 
    {
        name: "Courtney Doan", 
        username: "cdoan", 
        password: "Password1!", 
        image: "Image", 
        bio: "Bio"
    }, 
    {
        name: "Alexa Bruington", 
        username: "abruington", 
        password: "Password1!", 
        image: "Image", 
        bio: "Bio"
    }, 
    {
        name: "Carrie Bradshaw", 
        username: "cbradshaw", 
        password: "Password1!", 
        image: "https://www.marieclaire.com.au/media/79640/cb-01.jpg?width=720&center=0.0,0.0", 
        bio: "I love shoes!"
    }, 
    {
        name: "Samantha Jones", 
        username: "sjones", 
        password: "Password1!", 
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kim-cattrall-samantha-jones-sex-and-the-city-1611304823.jpg", 
        bio: "Bio"
    }, 
    {
        name: "Charlotte York", 
        username: "cyork", 
        password: "Password1!", 
        image: "https://cdn.mos.cms.futurecdn.net/5HUkPz5pjsYvGTqf5xTtVP.jpg", 
        bio: "Bio"
    }, 
    {
        name: "Miranda Hobbs", 
        username: "mhobbs", 
        password: "Password1!", 
        image: "https://corporette.com/wp-content/uploads/2008/05/miranda-hobbes-fashion.jpg", 
        bio: "I'm a lawyer and I love hanging out with my gals!"
    }, 
    {
        name: "Denise Fritts", 
        username: "dfritts", 
        password: "Password1!", 
        image: "Image", 
        bio: "Bio"
    }, 
    {
        name: "John Snow", 
        username: "jsnow", 
        password: "Password1!", 
        image: "https://www.koimoi.com/wp-content/new-galleries/2021/10/game-of-thrones-trivia-when-kit-haringtons-night-of-partying-resulted-in-stand-ins-with-jon-snows-wigs-substituting-for-him-in-season-3-001.jpg", 
        bio: "Life is too short! Im back and ready to make some planz!"
    }
])

puts "🎉🎉🎉 Seeding Events... 🎉🎉🎉"

Event.create!([
    {
        name: "Glamping", 
        description: "Girls weekend GLAMPING!", 
        location: "Mammoth, Ca", 
        date: "2022/09/13", 
        end_date: "2022/09/17",
        user_id: 1
    }, 
    {
        name: "Bachelorette Party", 
        description: "Charlottes bachelorette party!", 
        location: "Miami, Fl", 
        date: "2022/03/03", 
        end_date: "2022/03/06",
        user_id: 5
    }, 
    {
        name: "Girls weekend!", 
        description: "Lets get the gals together for a fun weekend!", 
        location: "Napa, Ca", 
        date: "2022/01/15", 
        end_date: "2022/01/17",
        user_id: 9
    }
])

#right not im not making the HOST a guest but maybe i will have to do that later on for ease on the front end
puts "😃😃😃 Seeding Guests... 😃😃😃"
Guest.create!([
    {
        user_id: 1, 
        event_id: 1
    }, 
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
        user_id: 5, 
        event_id: 2
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
        user_id: 9, 
        event_id: 3
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

puts "🏨🏨🏨 Seeding accommodations...🏨🏨🏨 "
Accommodation.create!([
    {
        name: "Airbnb", 
        address: "4000 Meridian Blvd, Mammoth Lakes, CA 93546" ,
        event_id: 1,
    },
    {
        name: "The Ritz-Carlton, South Beach", 
        address: "1 Lincoln Rd, Miami Beach, FL 33139" ,
        event_id: 2,
    },
    {
        name: "Airbnb", 
        address: "4048 Sonoma Highway, Napa CA 94559" ,
        event_id: 3,
    }
])

puts "🛫🛫🛫 Seeding transportation... 🛬🛬🛬"
Transportation.create!([
    {
        mode: "Flight", 
        date: "2022/03/03", 
        details: "F012", 
        guest_id: 6, 
        event_id: 2, 
    },
    {
        mode: "Flight", 
        date: "2022/03/03", 
        details: "F012",  
        guest_id: 7, 
        event_id: 2, 
    },
    {
        mode: "Flight", 
        date: "2022/03/03", 
        details: "F012",  
        guest_id: 8, 
        event_id: 2, 
    },
    {
        mode: "Flight", 
        date: "2022/03/03", 
        details: "F012",  
        guest_id: 9, 
        event_id: 2, 
    },
    {
        mode: "Flight", 
        date: "2022/01/15", 
        details: "Z155", 
        guest_id: 10, 
        event_id: 3, 
    },
])

puts "🤸🤸🤸 Seeding activities... 🤸🤸🤸"
Activity.create!([
    {
        name: "Hot Springs", 
        description: "Lets go take a dip in some natural hot springs!", 
        date: "2022/09/15", 
        time: "10 am",
        event_id: "1", 
    }, 
    {
        name: "Horseback Ride", 
        description: "Sunset horseback ride around Horseshoe lake!", 
        date: "2022/09/14", 
        time: "6 pm",
        event_id: "1", 
    }, 
    {
        name: "Spa", 
        description: "Private spa choose from facial or massage and wind down with the sauna!", 
        date: "2022/03/04", 
        time: "10 am",
        event_id: "2", 
    }, 
    {
        name: "Wine tasting", 
        description: "Private tour of infamous Andretti Windery.Lunch and tastings included in tour.", 
        date: "2022/01/05", 
        time: "11 am",
        event_id: "3", 
    }, 
    {
        name: "Dinner", 
        description: "Dinner at infamous Michelin Star restaurant, French Laundry.", 
        date: "2022/01/06", 
        time: "06 pm",
        event_id: "3", 
    }
])

puts "💰💰💰 Seeding expenses... 💰💰💰"
Expense.create!([
    {
        name: "Horseback Ride", 
        details: "Paid for all tickets", 
        amount: 250.00, 
        guest_id: 1, 
        event_id: 1
    }, 
    {
        name: "Dinner", 
        details: "Paid for dinner!", 
        amount: 300.00, 
        guest_id: "5", 
        event_id: "2"
    }, 
    {
        name: "Ubers", 
        details: "Paid for ubers", 
        amount: 100.00, 
        guest_id: 5, 
        event_id: 2
    }, 
    {
        name: "Airbnb", 
        details: "Paid for air bnb", 
        amount: 2000.00, 
        guest_id: 9, 
        event_id: 3
    }
])

puts "🧳🧳🧳 Seeding packing list... 🧳🧳🧳"
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

puts "🌱🌱🌱 DONE SEETING! 🌱🌱🌱"