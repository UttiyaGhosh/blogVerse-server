const mongoose = require('mongoose');

// Define the Vehicle Maintenance Log schema
const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    createdBy: String, // User Object
    createdDate: Date,
    comments: {
        commentBoby:String,
        createdBy:String, // User Object
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
