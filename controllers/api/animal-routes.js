const router = require("express").Router();
const { User, Animal } = require("../../models");
const withAuth = require("../../utils/auth");
var toConstantCase = require('to-constant-case');

router.get('/', (req, res) => {
  Animal.findAll({
    attributes: [
      "id",
      "species",
      "age",
      "gender",
      "animal_name",
      "location_city",
      "location_state",
      "maintenance",
      "temperament",
    ],
    include: [
      {
        model: User,
        attributes: ["username"]
      }
    ]
  })
  .then(dbAnimalData => res.json(dbAnimalData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Animal.findOne({
    attributes: [
      "id",
      "species",
      "age",
      "gender",
      "animal_name",
      "location_city",
      "location_state",
      "maintenance",
      "temperament"
    ],
    where: {
      id: req.params.id
    },
    include: [
      {
        model: User,
        attributes: ["username"]
      }
    ]
  })
    .then(dbAnimalData => {
      if (!dbAnimalData) {
        res.status(404).json({ message: toConstantCase("There is no animal with this id")});
        return;
      }
      res.json(dbAnimalData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post ("/", withAuth, (req, res) => {
  Animal.create({
    species: req.body.species,
    age: req.body.age, 
    gender: req.body.gender,
    animal_name: req.body.animal_name,
    location_city: req.body.location_city,
    location_state: req.body.location_state,
    maintenance: req.body.maintenance,
    temperament: req.body.temperament,
    user_id: req.session.user_id
  })
  .then(dbAnimalData => res.json(dbAnimalData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put("/:id", withAuth, (req, res) => {
  Animal.update(
    {
      species: req.body.species,
      age: req.body.age, 
      gender: req.body.gender,
      animal_name: req.body.animal_name,
      location_city: req.body.location_city,
      location_state: req.body.location_state,
      maintenance: req.body.maintenance,
      temperament: req.body.temperament,
      user_id: req.session.user_id
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbAnimalData => {
      if (!dbAnimalData) {
        res.status(404).json({ message: "No animal was found with this id"});
        return;
      }
      res.json(dbAnimalData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Animal.destroy({
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbAnimalData => {
      if (!dbAnimalData) {
        res.status(404).json({ message: "No animal was found with this id"});
        return;
      }
      res.json(dbAnimalData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;