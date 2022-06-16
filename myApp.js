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

//Routes with middleware chaining
app.get('/now', (req, res, next) => {
    let myDate = new Date();
    req.time = myDate.toString();
    next()
}, (req, res) => {
    res.json({ "time": req.time })
} )

// Routes
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/json", function(req, res) {
   let message = "Hello json"
   if (process.env.MESSAGE_STYLE === "uppercase") { message = message.toUpperCase() }
    res.json({"message": message})
})

//Routes with parameters

app.get("/:word/echo", (req, res) => {
    res.json({"echo": req.params.word})
})































 module.exports = app;
