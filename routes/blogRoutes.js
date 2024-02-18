const express = require("express");
const router = express.Router();
const {
  viewAllBlogs,
  addNewBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const {
  convertUserNameToObjectId, 
  convertCategoryNameToObjectId, 
  validateBlogData 
} = require("../middlewares/blogMiddleware")


// Route to get all blogs
router.get("/", viewAllBlogs);

// Route to add a new blog
router.post("/add",convertUserNameToObjectId, convertCategoryNameToObjectId, validateBlogData ,  addNewBlog);

// Route to update a blog
router.post("/update/:id", updateBlog);

// Route to delete a pet by ID
router.post("/delete/:id", deleteBlog);

module.exports = router;
