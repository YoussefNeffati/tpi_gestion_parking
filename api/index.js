const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());

app.use(cors());


const PORT = process.env.PORT || 5050
const { voitures, addvoitures } = require('./models/voitures')


app.get('/', (req, res) => {
    res.send('This is my demo project')
})

app.get('/voitures', voitures);

// Add a new date to the database
app.post('/date', addvoitures);



app.listen(PORT, function () {
    console.log(`Api sur le port: ${PORT}`);
});

