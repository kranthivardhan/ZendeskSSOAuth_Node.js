const jwt = require('jsonwebtoken')
const {v4: uuid} = require('uuid')
//dummy login
const CORRECT_USERNAME = "jgoodman@capsystems.com"
const CORRECT_PASSWORD = "Jennifer1980!"

//Zendesk SSO config
const ZENDESK_SHARED_SECRET = "jTKFgexkas2ZqRAYM0nJlhdsMAreZC8uWFztU8ERqPl3TKEH"
const ZENDESK_SUBDOMAIN = "capsystems"

const loginHandler = (req, res) => {
    console.log("login details", req.body)
    const {username, password} = req.body
    if ((username != CORRECT_USERNAME) || (password != CORRECT_PASSWORD)){
        res.status(401).json({
            error: true,
            message: "Incorrect Username or Password"
        })
        return 0
    }
    //else: correct credentials
    console.log("login succesful!")

    //build payload for the Zendesk user we want to authenticate
    const payload = {
        iat: Math.floor(new Date().getTime() / 1000),
        jti: uuid().slice(0,5),
        name: "Jen Goodman",
        email: "jgoodman@capsystems.com"
    }

    //generate (sign) JSON web token using Zendesk Shared secret
    const jwtToken = jwt.sign(payload, ZENDESK_SHARED_SECRET)

    //return JWT to client side
    res.status(200).json({
        error: false,
        token: jwtToken
    })    
}

module.exports = {
    loginHandler
}