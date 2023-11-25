const express = require("express");
const { signUp } = require("../controllers/signUp");
const { signIn } = require("../controllers/signIn");
const { logOut } = require("../controllers/logOut");
const { auth } = require("../controllers/auth");
const { refreshToken } = require("../controllers/refreshToken");
const router = express.Router()

router.post("/register", signUp)
router.post("/login", signIn);
router.post("/logout", logOut)
router.post("/protected", auth)
router.post("/refresh_token", refreshToken)

module.exports = {
    router
};