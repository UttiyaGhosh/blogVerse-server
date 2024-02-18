const express = require("express");
const router = express.Router();

const Category = require("../models/Category");

const viewAllCategories = async (req, res) => {
  
  try {
    const allCategories = await Category.find();
    res.status(200).json(allCategories.map(category=>category.name) );
  } catch (error) {
    if(error instanceof Error){
      console.error(error.message);
      res.status(400).json({ error: error.message });
    }else{
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const addNewCategory = async (req, res) => {
  
  try {
    const newCategory = new Category(req.body);
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await CategoryMaintenance.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect("/categorys/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await CategoryMaintenance.findByIdAndDelete(req.params.id);
    res.redirect("/categorys/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { viewAllCategories, addNewCategory, updateCategory, deleteCategory };
