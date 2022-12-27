const express = require("express");
const router = express.Router();

const CityController = require("../../controller/city-controller");
const AirportController = require("../../controller/airport-controller");

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);
router.post("/multipleCity", CityController.addMultipleCity);
router.post("/getAllAirport", CityController.getAllAirportFromCity);

//Airport
router.post("/airport", AirportController.createAirport);
router.delete("/airport/:id", AirportController.deleteAirport);
router.get("/airport/:id", AirportController.getAirport);
router.patch("/airport/:id", AirportController.updateAirport);
router.get("/airport", AirportController.getAllAirport);
router.post("/airport/", AirportController.addMultipleAirport);

module.exports = router;
