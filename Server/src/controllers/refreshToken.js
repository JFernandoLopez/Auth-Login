const { verify } = require("jsonwebtoken")
const { User } = require("../DB_connection")

const refreshToken = async (req, res) => {
    const token = req.cookies.refreshtoken
    //if we don't have a token in our request 
    if(!token) return res.status(400).send({accesstoken: ""})
    //We have a token, lets verify it
    let payload = null
        try {
            payload = verify(token, "secret_key")
        } catch (error) {
            return res.status(400).json({accesstoken: ""})
        }
    //userId because tokens constructors use userId like integer
    const user = await User.findOne({where: {uid: payload.userId}})
    if(!user) return res.send({accesstoken: ""})
    //user exist, check if refresh exist on user
}   

module.exports = {
    refreshToken,
}