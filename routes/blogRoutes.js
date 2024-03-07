const express = require("express");
const router = express.Router();
const {
  viewBlogs,
  viewBlog,
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

// Route to get a single blog
router.get("/:id", viewBlog);

// Route to add a new blog
router.post("/",convertUserNameToUserId, validateBlogData ,  addNewBlog);

// Route to update a blog
router.put("/:id", updateBlog);

// Route to delete a pet by ID
router.delete("/:id", deleteBlog);

module.exports = router;
