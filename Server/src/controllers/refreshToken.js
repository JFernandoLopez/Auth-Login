const { verify } = require("jsonwebtoken")
const { User } = require("../DB_connection")
const {createAccessToken, createRefreshToken, sendRefreshToken} = require("./createTokens")

const refreshToken = async (req, res) => {
    const token = req.cookies.refreshtoken
    //if we don't have a token in our request 
    if(!token) return res.status(400).send({accesstoken: ""})
    //We have a token, lets verify it
    let payload = null
        try {
            payload = verify(token, "secret_key")
            //Token is valid, check if user exist
            //userId because tokens constructors use userId like integer
            const user = await User.findByPk(payload.uid)
            if(!user) return res.status(404).send({accesstoken: ""})
            //user exist, check if refresh exist on user
            if(user.token !== token) return res.status(400).send({accesstoken: ""})
            //Token exist, create new Refresh and accesstoken
            const accesstoken = createAccessToken(user.uid);
            const refreshtoken = createRefreshToken(user.uid);
            user.token = refreshtoken;
            await user.save()
            //All good to go, send new refreshtoken and accesstoken
            sendRefreshToken(res, refreshtoken)
            return res.send({ accesstoken })
        } catch (error) {
            return res.status(400).json({accesstoken: ""})
        }

}

module.exports = {
    refreshToken,
}