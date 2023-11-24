const { compare } = require("bcryptjs");
const { User } = require("../DB_connection");
const { createRefreshToken, createAccessToken, sendAccessToken, sendRefreshToken } = require("./createTokens")

const signIn = async (req, res) => {
    const {email, password} = req.body;
    try {
        //1. find user in database
        const user = await User.findOne({where: {email: email}})
        if(!user) throw new Error("User does not exist");
        //2. compare crypted password and see if it checks out. Send error if not
        const validPassword = await compare(password, user.password);
        if(!validPassword) throw new Error("Incorrect Password")
        //3. Create refresh and access token
        const accessToken = createAccessToken(user.uid);
        const refreshToken = createRefreshToken(user.uid);
        //4. Put the refresh token in the "database"
        
        //5. Send token. Refresh as a cookie and access token as regular response
        sendRefreshToken(res, refreshToken);
        sendAccessToken(res, req, accessToken);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    signIn,
}