const mongoose = require('mongoose');

// Define the Vehicle Maintenance Log schema
const vehicleMaintenanceLogSchema = new mongoose.Schema({
  logID: {
    type: Number,
    required: true,
  },
  vehicleID: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  maintenanceType: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  mechanicName: {
    type: String,
    required: true,
  },
  serviceLocation: {
    type: String,
    required: true,
  },
  partsReplaced: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  nextServiceDate: {
    type: Date,
    required: true,
  },
});

// Create the Vehicle Maintenance Log model
const VehicleMaintenanceLog = mongoose.model('VehicleMaintenanceLog', vehicleMaintenanceLogSchema);

// Export the Vehicle Maintenance Log model
module.exports = VehicleMaintenanceLog;
