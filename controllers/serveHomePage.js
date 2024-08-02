const path = require('path')

const serveHomePage = (req, res) => {
    const homePagePath = path.join(__dirname, "..", "/public/home.html")
    res.sendFile(homePagePath)
}

module.exports = {
    serveHomePage
}