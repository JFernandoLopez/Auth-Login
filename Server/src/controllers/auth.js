const {verify} = require("jsonwebtoken");

const isAuth = (req) => {
    const authorization = req.headers["authorization"];
    if(!authorization) throw new Error("You need to loggin")
    //"Bearer" asdasdasdasd
    const token = authorization.split(" ")[1];
    const {uid} = verify(token, "secret_key")
    return uid;
}


const auth = async (req, res) => {
    try {
        const userId= isAuth(req);
        if(userId !== null ){
            res.status(201).json({data: "this is protected data"})
        }
    } catch (error) {
            res.status(401).json({data: error.message})
    }
}

module.exports = {
    auth,
}