const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

require('dotenv').config(); //so that we can read teh information about our secret key which is stored in the .env file
const cookieParser = require('cookie-parser'); //so that the server can understand the cookie information coming in from the client (browser)


console.log("SECRET KEY IS THIS--->", process.env.SECRET_KEY)

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());

app.get("/api", (req, res) => {
    res.json({ message: "hey itsa me, Mario!" })
})

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/routes/user.routes")(app);

app.listen(8000, () => console.log(`running on port ${port} is blowing my mind`));