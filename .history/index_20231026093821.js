var express = require('express');
var app = express();
const PORT = process.env.PORT || 3003;
const bodyParser = require("body-parser");
const path = require("path");


app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.render('cart');
});

app.post('/checkout', (req, res) => {
    var steak = req.body.steak;
    var burrito= req.body.burrito;
    var chickensalad = req.body.chickensalad
    res.render("checkout", {steak: steak});
});
