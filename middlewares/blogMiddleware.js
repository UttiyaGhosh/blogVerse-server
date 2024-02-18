const User = require("../models/User");
const Category = require("../models/Category");

async function convertUserNameToUserId(req, res, next) {
    try {
        console.log('Entered convertUserNameToUserId with request:',req.body)
        const { createdBy } = req.body;        
        const user = await User.findOne({ username: createdBy });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        req.body.createdBy = user._id;
        console.log(`User Id for ${createdBy} is ${req.body.createdBy}`)
        next();
    } catch (error) {
        if(error instanceof Error){
            console.error(error.message);
            res.status(400).json({ error: error.message });
          }else{
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
          }
    }
}

async function convertCategoryNameToCategoryId(req, res, next) {
    console.log('Entered convertCategoryNameToCategoryId')
    try {
        const { category } = req.body;
        const categoryDB = await Category.findOne({ name: category });
        if (!category) {
            return res.status(400).json({ error: 'Category not found' });
        }
        req.body.category = categoryDB._id;
        console.log(`Category Id for ${category} is ${req.body.category}`)
        next();
    } catch (error) {
        if(error instanceof Error){
            console.error(error.message);
            res.status(400).json({ error: error.message });
          }else{
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
          }
    }
}

async function validateBlogData(req, res, next) {
    const { title, body, createdBy, category } = req.body;
    if (!title || !body || !createdBy || !category) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    next();
}

module.exports = { convertUserNameToUserId, convertCategoryNameToCategoryId, validateBlogData };