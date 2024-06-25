const express = require('express')
const bookRoutes = require('./Routes/bookRoutes')
const authorRoutes = require('./Routes/authorRoutes')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.use('/books', bookRoutes)
app.use('/authors', authorRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
})