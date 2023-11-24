const {sign} = require("jsonwebtoken");

const createAccessToken = (userId) => {
    return sign({userId}, "secret_key", {
        expiresIn: '15m'
    })
}

const createRefreshToken = (userId) => {
    return sign({userId}, "secret_key", {
        expiresIn: '7d'
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