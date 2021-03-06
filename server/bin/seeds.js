require('dotenv').config()


// DB connection
require('./../config/db.config')

const mongoose = require('mongoose')

//model requirement
const Restaurant = require('./../models/restaurant.model')

// Seed here!

const restaurants = [{
        "name": "Casa Peponte",
        "address": "Calle de las Casas, 12",
        "city": "Madrid",
        "foodType": "italiana",
        "image": "https://static.carrefour.es/hd_350x_/img_pim_food/197236_00_1.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "recommendations": "Pizza, Pasta, Pesto",
        "cost": "€",
        "location": {
            "type": "Point",
            "coordinates": [
                40.46346808413499,
                -3.6890429544322716
            ]
        }
    },
    {
        "name": "Taberna de Allí",
        "address": "Calle de las Burras, 10",
        "city": "Barcelona",
        "foodType": "mediterránea",
        "image": "https://static.carrefour.es/hd_350x_/img_pim_food/014107_00_1.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "recommendations": "Paella, Gazpacho, Pan con tomate",
        "cost": "€€€",
        "location": {
            "type": "Point",
            "coordinates": [
                40.469563610377556,
                -3.6985893453888226
            ]
        }
    },
    {
        "name": "Taberna de Allí",
        "address": "Calle de las Burras, 10",
        "city": "Barcelona",
        "foodType": "mediterránea",
        "image": "https://static.carrefour.es/hd_350x_/img_pim_food/014107_00_1.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "recommendations": "Paella, Gazpacho, Pan con tomate",
        "cost": "€€€",
        "location": {
            "type": "Point",
            "coordinates": [
                40.469563610377556,
                -3.6985893453888226
            ]
        }
    },
    {
        "name": "Taberna de Allí",
        "address": "Calle de las Burras, 10",
        "city": "Barcelona",
        "foodType": "mediterránea",
        "image": "https://static.carrefour.es/hd_350x_/img_pim_food/014107_00_1.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "recommendations": "Paella, Gazpacho, Pan con tomate",
        "cost": "€€€",
        "location": {
            "type": "Point",
            "coordinates": [
                40.469563610377556,
                -3.6985893453888226
            ]
        }
    }
];

// Code Here

Restaurant
    .create(restaurants)
    .then(response => {
        console.log('Estos son los restaurantes!', response)
        mongoose.connection.close();
    })
    .catch(err => console.log('se produjo un error...', err))