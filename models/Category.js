const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    }
 });

const Blog = mongoose.model('categories', categorySchema);

module.exports = Blog;
