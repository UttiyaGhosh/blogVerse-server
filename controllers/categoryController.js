const Category = require("../models/Category");

const viewCategories = async (req, res) => {
  const { name,createNew } = req.query;

  let dbQuery = {};
  if (name) {
    dbQuery.name = name;
  }

  try {
    const allCategories = await Category.find(dbQuery);
    
    if(allCategories.length == 0 && createNew){
      const newCategory = new Category({name:name});
      const savedCategory = await newCategory.save();
      res.status(200).json([savedCategory]);
    }else{
      res.status(200).json(allCategories.map(category=>category.name));
    }

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
    if(error instanceof Error){
      console.error(error.message);
      res.status(400).json({ error: error.message });
    }else{
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect("/categorys/");
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

const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    res.redirect("/categorys/");
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

module.exports = { viewCategories, addNewCategory, updateCategory, deleteCategory };
