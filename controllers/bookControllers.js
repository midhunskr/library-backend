
const getAllBooks = (req, res) => {
    res.send("Got GET request to fetch all Books.")
}

const getBookById = (req, res) => {
    res.send('Got GET request to fetch a Book.')
}

const addNewBook = (req, res) => {
    res.send('Got POST request for adding a product!')
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