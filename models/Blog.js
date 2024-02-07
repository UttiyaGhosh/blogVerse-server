const mongoose = require('mongoose');

// Define the Vehicle Maintenance Log schema
const blogSchema = new mongoose.Schema({
    title: String,
    body: Number,
    createdBy: String,
    createdDate: Date,
    comments: {
        commentBoby:String,
        createdBy:String,
        createdDate:Date
    },
    category: { 
        type: String, 
        enum: ['Programming', 'Frameworks', 'Tools', 'Software Engineering', 'Interview Preparation'] 
    },
    tags: [String],
    deletedDate: Date
 });

// Create the Vehicle Maintenance Log model
const Blog = mongoose.model('blogs', blogSchema);

// Export the Vehicle Maintenance Log model
module.exports = Blog;
