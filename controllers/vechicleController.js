const express = require("express");
const router = express.Router();

const VehicleMaintenance = require("../models/VehicleMaintenance");

const viewAllCars = async (req, res) => {
  try {
    const allVechicles = await VehicleMaintenance.find();
    res.render("allVechicles", { cars: allVechicles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const addNewCar = async (req, res) => {
  try {
    const newCar = new VehicleMaintenance(req.body);
    const savedCar = await newCar.save();
    res.redirect("/cars/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const updateCar = async (req, res) => {
  try {
    const updatedCar = await VehicleMaintenance.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect("/cars/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteCar = async (req, res) => {
  try {
    const deletedCar = await VehicleMaintenance.findByIdAndDelete(req.params.id);
    res.redirect("/cars/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { viewAllCars, addNewCar, updateCar, deleteCar };
