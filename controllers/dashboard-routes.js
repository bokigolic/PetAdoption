const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Animal } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
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
      "temperament"
    ],
    include: [
      {
        model: User,
        attributes: ["username"]
      }
    ]
  })
  .then(dbAnimalData => {
    const animals = dbAnimalData.map(animal => animal.get({ plain: true }));
    res.render("dashboard", { 
      animals, 
      loggedIn: req.session.loggedIn 
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;  