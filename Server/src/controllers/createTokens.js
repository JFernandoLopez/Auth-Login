const {sign} = require("jsonwebtoken");

const createAccessToken = (uid) => {
    return sign({uid}, "secret_key", {
        expiresIn: "5m"
    })
}

const createRefreshToken = (uid) => {
    return sign({uid}, "secret_key", {
        expiresIn: "10m"
    })
}

const sendAccessToken = (res, req, accessToken) => {
    res.status(200).send({
        accessToken,
        email: req.body.email
    })
}

const sendRefreshToken = (res, refreshtoken) => {
    res.cookie('refreshtoken', refreshtoken, { 
        httpOnly: true,
        path: '/refresh_token'
    })
}

module.exports = {
    createAccessToken,
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken
}