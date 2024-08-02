const path = require('path')

const serveLoginPage = (req, res) => {
    const loginPagePath = path.join(__dirname, "..", "/public/login.html")
    res.sendFile(loginPagePath)
}

module.exports = {
    serveLoginPage
}