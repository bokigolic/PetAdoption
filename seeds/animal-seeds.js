const { Animal } = require("../models");

const animalData = [
  { // 2 dogs
    species: "dog",
    age: 2,
    gender: "male",
    animal_name: "Toto",
    location_city: "Wichita",
    location_state: "Kansas",
    maintenance: "medium",
    temperament: "hyper"
  },
  {
    species: "dog",
    age: 8,
    gender: "male",
    animal_name: "Ralph",
    location_city: "Atlanta",
    location_state: "Georgia",
    maintenance: "medium",
    temperament: "calm"
  },
  { // 2 cats
    species: "cat",
    age: 1,
    gender: "female",
    animal_name: "Sophie",
    location_city: "Richmond",
    location_state: "Virginia",
    maintenance: "high",
    temperament: "calm"
  },
  { 
    species: "cat",
    age: 3,
    gender: "female",
    animal_name: "Ambrose",
    location_city: "Baltimore",
    location_state: "Maryland",
    maintenance: "medium",
    temperament: "curious"
  },
  { // 1 bird
    species: "bird",
    age: 6,
    gender: "male",
    animal_name: "Ari",
    location_city: "Washington",
    location_state: "DC",
    maintenance: "medium",
    temperament: "loud"
  },
  { // 1 snake
    species: "snake",
    age: 3,
    gender: "male",
    animal_name: "Leon",
    location_city: "Reno",
    location_state: "Nevada",
    maintenance: "high",
    temperament: "gluttonous"
  },
  { // 1 lizard
    species: "lizard",
    age: 2,
    gender: "male",
    animal_name: "Ranger",
    location_city: "Tucson",
    location_state: "Arizona",
    maintenance: "low",
    temperament: "lazy"
  }
]

const seedAnimals = () => Animal.bulkCreate(animalData);
module.exports = seedAnimals;