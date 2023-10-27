var express = require('express');
var app = express();
const PORT = process.env.PORT || 3003;


app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})


