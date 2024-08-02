const express = require('express')
const {serveLoginPage} = require('../controllers/serveLoginPage')
const { loginHandler } = require('../controllers/login')
const { serveHomePage } = require('../controllers/serveHomePage')

const routes = express.Router()

routes.get("/", serveLoginPage)
routes.get("/home", serveHomePage)
routes.post("/login", loginHandler)


module.exports = {routes}