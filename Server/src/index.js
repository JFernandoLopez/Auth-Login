const express = require("express")
const cors = require('cors')
const { router } = require("./routes/routes");
const cookieParser = require("cookie-parser");
const app = express()

//1. Register a user.
//2. Login a user.
//3. Logout.
//4. Set a protected Route
//5. Get a new access token with a refresh token

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser());

app.use('/', router);

module.exports = {
    app
};