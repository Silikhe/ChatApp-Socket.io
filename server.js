
const path = require('path')
const express = require('express')

//Serving static files in Express

app.use(express.static(path.join(__dirname, '/public')))

const PORT = 3000 || process.env.PORT

const app = express()

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`))