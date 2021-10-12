const axios = require('axios');
const app = express();
const config = require('../config.js')
const db = require('../database/index.js');
const port = 3000;
const cors = require('cors');
const express = require('express');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, function() {
  console.log(`MVP server listening on port ${port}`);
});