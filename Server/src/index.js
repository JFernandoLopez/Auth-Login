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
  origin: "http://localhost:3001",
  credentials: true
}))
app.use(cookieParser())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use('/', router)

module.exports = {
    app
}