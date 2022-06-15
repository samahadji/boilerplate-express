let express = require('express');
let app = express();

let publicPath = __dirname + "/public"
app.use("/public", express.static(publicPath));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/json", function(req, res) {
    res.json({"message": "Hello json"})
})

































 module.exports = app;
