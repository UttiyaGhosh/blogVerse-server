const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    comments: [{
        commentBoby:{
            type: String,
            required: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        createdDate: {
            type: Date,
            default: Date.now
        },
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },
    tags: [String],
    deletedDate: Date
 });

const Blog = mongoose.model('blogs', blogSchema);

module.exports = Blog;
