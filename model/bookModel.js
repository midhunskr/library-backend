const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    images: [String],
    mainImage: String,
    author: String,
    title: String,
    price: Number,
    description: String
});

const Book = mongoose.model('Product', bookSchema);

module.exports = Book