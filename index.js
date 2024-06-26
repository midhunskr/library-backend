const mongoose = require('mongoose');
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


// getting-started.js

main().then(() => console.log('connected')) .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://midhunshankar199:gSOJPkWrxSEPwWU9@cluster0.iorkogu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}