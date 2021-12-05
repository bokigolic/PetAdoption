const router = require("express").Router();

const animalRoutes = require("./animal-routes");
const userRoutes = require("./user-routes");

router.use("/animals", animalRoutes);
router.use("/users", userRoutes);

module.exports = router;