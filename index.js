const express = require('express')
const path = require('path')
const {routes} = require('./router/router')

const app = express() //the express app is the express instance
const PORT = 8080


//what the app uses
app.use(express.json())
app.use("/", routes)
//static files have to be served correctly
app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, () => {console.log(`Server up! -> http://localhost:${PORT}`)})