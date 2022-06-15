let express = require('express');
let app = express();

let publicPath = __dirname + "/public"
app.use(publicPath, express.static(publicPath));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/views/index.html')
})


































 module.exports = app;
