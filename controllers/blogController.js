const User = require("../models/User");
const Blog = require("../models/Blog");
const Category = require("../models/Category");
const { format } = require('date-fns');
const cheerio = require('cheerio');

const viewBlog = async (req, res) => {
  const { id } = req.params;
  
  let dbQuery = { 
    _id:id,
    deletedDate: null 
  };

  try {
    const blogs = await Blog.find(dbQuery)
    if(blogs.length==1)
    {
      const blog = blogs[0]
      const blogsResponse = {
        _id: blog._id,
        title: blog.title,
        userName: await convertUserIdToUserName(blog.createdBy),
        category: await convertCategoryIdToCategoryName(blog.category),
        createdDate: format(blog.createdDate, 'MMM d, yyyy'),
        body:blog.body
      }
      res.status(200).json(blogsResponse);
    }else{
      res.status(404).json({ error: "Blog Not Found" });
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

const viewBlogs = async (req, res) => {
  const { createdBy,searchQuery,id } = req.query;
  
  let dbQuery = { deletedDate: null };

  if (createdBy) {
    dbQuery.createdBy = createdBy;
  }

  if (searchQuery) {
    dbQuery.$or = [
      { title: { $regex: searchQuery, $options: 'i' } },
      { 'category.name': { $regex: searchQuery, $options: 'i' } }
    ];
  }

  if (id) {
    dbQuery._id = id;
  }

  try {
    const blogs = await Blog.find(dbQuery)
    console.log(blogs)
    const blogsResponse = await Promise.all(blogs.map(async (blog) => ({
      _id: blog._id,
      title: blog.title,
      userName: await convertUserIdToUserName(blog.createdBy),
      category: await convertCategoryIdToCategoryName(blog.category),
      createdDate: format(blog.createdDate, 'MMM d, yyyy'),
      summary:convertBodyToSummary(blog.body,240) +' ...'
    })));
    res.status(200).json(blogsResponse);
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

const addNewBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();

    res.status(200).json({id:savedBlog._id});
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

const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { body: req.body.body },
      { new: true }
  );

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteBlog = async (req, res) => {
  console.log("A")
  try {
    const deletedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { deletedDate: new Date() },
      { new: true }
    );
    res.status(200).json(deletedBlog);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Internal Server Error" });
  }
};

async function convertUserIdToUserName(userId) {
      console.log('Entered convertUserIdToUserName with:',userId)
      const user = await User.findOne({ _id: userId });
      console.log(`User Name for ${userId} is ${user.username}`)
      return user.username
}

async function convertCategoryIdToCategoryName(categoryId) {
  console.log('Entered convertCategoryIdToCategoryName with:',categoryId)
  const category = await Category.findOne({ _id: categoryId });
  console.log(`User Name for ${categoryId} is ${category.name}`)
  return category.name
}

function convertBodyToSummary (body,length) {
  const $ = cheerio.load(body);
  const extractedText = [];
  $('p').each((index, element) => {
      const paragraphText = $(element).text().trim();
      const first200Characters = paragraphText.slice(0, length);
      extractedText.push(first200Characters);
  });

  const combinedText = extractedText.join(' ');
  return combinedText
};

module.exports = { viewBlogs, viewBlog, addNewBlog, updateBlog, deleteBlog };
