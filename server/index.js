const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000
const apiFn = require('./helpers');
var compression = require('compression')
// const config = require('../config.js')
// const db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(cors());
app.use(compression());

// ROUTES

// Get Request-------------------------------------------------------------------------------------

app.get('/drinks', (req, res) => {
  apiFn.getDrinks(req.query, (err, drinkData) => {
    if (err) {
      res.status(500).send('Error getting drink data');
    } else {
      // console.log('Drinky Drinky---> ', drinkData.data);
      res.status(200).send(drinkData.data);
    }
  });
});



app.get('/ingredients', (req, res) => {
  console.log('req-->', req);
  apiFn.getIngDrinks(req.query, (err, drinkData) => {
    if (err) {
      res.status(500).send('Error getting drink data');
    } else {
      // console.log('Drinky Drinky---> ', drinkData.data);
      res.status(200).send(drinkData.data);
    }
  });
});

//--------------------------------------------------------------------------------------------------

app.listen(port, function() {
  console.log(`MVP server listening on port ${port}`);
});
