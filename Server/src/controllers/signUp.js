const {hash} = require("bcryptjs");
const {User} = require("../DB_connection");
const { createAccessToken } = require("./createTokens")

const signUp = async(req, res) => {
    const {userName, email, password, location, phoneNumber} = req.body;
    try {
        //1. check if exits
        const user = await User.findOne({where: {email: email}});
        if(user) throw new Error("Email already used");
        //2. If not exist, hash the password
        const hashPassword = await hash(password, 5);
        //3. Insert the user in de data base
        const newUser = await User.create({userName, email, password: hashPassword, location, phoneNumber})
        res.status(201).json({message: "User Created"})
        console.log(newUser)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    signUp
}