const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const {
  viewAllBlogs,
  addNewBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

// Route to get all cars logs
router.get("/", viewAllBlogs);
// Route to display form to add new car log
router.get("/addBlog", (req, res) => {
  res.render("addBlog");
});
// Route to add a new car
router.post("/", addNewBlog);

// Route to update a car log by ID
router.post("/:id", async (req, res) => {
  const newBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.render("updateBlog", { log: newBlog });
});
router.post("/update/:id", updateBlog);

// Route to delete a pet by ID
router.post("/delete/:id", deleteBlog);

module.exports = router;
