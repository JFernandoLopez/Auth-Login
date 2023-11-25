const {clearCookie} = require("cookie-parser")

const logOut = (req, res) => {
    res.clearCookie('refreshtoken', {path: "/refresh_token", httpOnly: true });
    return res.status(200).json({message: "Logged Out"})
}

module.exports = {
    logOut,
}