const express = require("express");
const router = express.Router();
const {
  viewBlogs,
  addNewBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const {
  convertUserNameToUserId, 
  validateBlogData 
} = require("../middlewares/blogMiddleware")


// Route to get all blogs
router.get("/", viewBlogs);

// Route to add a new blog
router.post("/add",convertUserNameToUserId, validateBlogData ,  addNewBlog);

// Route to update a blog
router.post("/update/:id", updateBlog);

// Route to delete a pet by ID
router.post("/delete/:id", deleteBlog);

module.exports = router;
