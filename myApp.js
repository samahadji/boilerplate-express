require('dotenv').config();

let express = require('express');
let app = express();

let publicPath = __dirname + "/public"
app.use("/public", express.static(publicPath));

//Middlewares
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})

// Routes
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/json", function(req, res) {
   let message = "Hello json"
   if (process.env.MESSAGE_STYLE === "uppercase") { message = message.toUpperCase() }
    res.json({"message": message})
})

































 module.exports = app;
