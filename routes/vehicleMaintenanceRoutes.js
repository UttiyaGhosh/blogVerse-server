const express = require("express");
const router = express.Router();
const VehicleMaintenance = require("../models/VehicleMaintenance");
const {
  viewAllCars,
  addNewCar,
  updateCar,
  deleteCar,
} = require("../controllers/vechicleController");

// Route to get all cars logs
router.get("/", viewAllCars);
// Route to display form to add new car log
router.get("/addVehicle", (req, res) => {
  res.render("addVehicle");
});
// Route to add a new car
router.post("/", addNewCar);

// Route to update a car log by ID
router.post("/:id", async (req, res) => {
  const newCar = await VehicleMaintenance.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.render("updateCar", { log: newCar });
});
router.post("/update/:id", updateCar);

// Route to delete a pet by ID
router.post("/delete/:id", deleteCar);

module.exports = router;
