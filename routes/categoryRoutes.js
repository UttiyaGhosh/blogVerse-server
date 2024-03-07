const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const {
  viewCategories,
  addNewCategory
} = require("../controllers/categoryController");

// Route to get all categories
router.get("/", viewCategories);

// Route to add a new category
router.post("/", addNewCategory);

module.exports = router;
