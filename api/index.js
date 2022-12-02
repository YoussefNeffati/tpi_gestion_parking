var express = require('express');
var app = express();

const PORT = process.env.PORT || 5050
const { voitures } = require('./models/voitures')

app.get('/', (req, res) => {
    res.send('This is my demo project')
})

app.get('/voitures', voitures);

app.listen(PORT, function () {
    console.log(`Api sur le port: ${PORT}`);
});
