const Author = require("../model/authorModel")

const getAllAuthors = async (req, res) => {
    const authors = await Author.find({})
    res.json(authors)
}

const getAuthorById = async (req, res) => {
    try{
        const author = await Author.findById(req.params.authorId).exec()
        res.status(200).json(author)
    }
    catch(error){
        res.status(404).json('Author not found!')
    }
}

const addNewAuthor = async (req, res) => {
    const authorData = req.body
    const newAuthor = new Author(authorData)
    await newAuthor.save()
    res.status(201).json(newAuthor)
}

const updateAuthor = (req, res) => {
    res.send('Got PATCH request to update a Author.')
}

const deleteAuthor = (req, res) => {
    res.send('Got DELETE request to delete a Author.')
}

module.exports = {
    getAllAuthors,
    getAuthorById,
    addNewAuthor,
    updateAuthor,
    deleteAuthor
}