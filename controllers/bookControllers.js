const Book = require("../model/bookModel")

const getAllBooks = async (req, res) => {
    const products = await Book.find({})
    res.json(products)
}

const getBookById = async (req, res) => {
    try{
        const book = await Book.findById(req.params.bookId).exec()
        res.status(201).json(book)
    }
    catch(error){
        res.status(404).json('Book not found!')
    }
}

const addNewBook = async (req, res) => {
    const bookData = req.body
    const newBook = new Book(bookData)
    await newBook.save()
    res.status(201).json(newBook)
}

const updateBook = (req, res) => {
    res.send('Got PATCH request at /user')
}

const deleteBook = (req, res) => {
    res.send('Got DELETE request at /user')
}

module.exports = {
    getAllBooks,
    getBookById,
    addNewBook,
    updateBook,
    deleteBook
}