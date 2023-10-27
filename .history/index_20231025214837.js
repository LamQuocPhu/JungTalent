var express = require('express');
var app = express();
const PORT = process.env.PORT || 3003;
app.use(express.


app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})

app.post('/cart', (req, res) => {
    res.render('cart');
})
