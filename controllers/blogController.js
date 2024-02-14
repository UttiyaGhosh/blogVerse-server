const express = require("express");
const router = express.Router();

const Blog = require("../models/Blog");
//server side validation
//deploy in a server
const viewAllBlogs = async (req, res) => {
  console.log("*************")
  try {
    const allBlogs = await Blog.find();
    res.status(200).json(allBlogs );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addNewBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    newBlog.createdDate = new Date();
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await BlogMaintenance.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect("/blogs/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await BlogMaintenance.findByIdAndDelete(req.params.id);
    res.redirect("/blogs/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { viewAllBlogs, addNewBlog, updateBlog, deleteBlog };
