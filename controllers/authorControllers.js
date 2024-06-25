const getAllAuthors = (req, res) => {
    res.send('Got GET request to fetch all Categories.')
}

const getAuthorById = (req, res) => {
    res.send('Got GET request to fetch a Author.')
}

const addNewAuthor = (req, res) => {
    res.send('Got POST request to add a Author.')
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