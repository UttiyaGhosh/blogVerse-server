const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const {
  viewAllCategories,
  addNewCategory
} = require("../controllers/categoryController");

// Route to get all categories
router.get("/", viewAllCategories);

// Route to add a new category
router.post("/add", addNewCategory);

// Route to update a blog
// router.post("/update/:id", updateBlog);

// Route to delete a pet by ID
// router.post("/delete/:id", deleteBlog);

module.exports = router;
