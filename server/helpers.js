const axios = require('axios');
const headers = { Authorization: '1' };

const getDrinks = (params, callback) => {
  axios
    .get('https://thecocktaildb.com/api/json/v1/1/search.php', {
      params,
      headers
    })
    .then((drinks) => {
      // console.log('HERE IS THE API GET DATA---> ', drinks);
      callback(null, drinks);
    })
    .catch((err) => {
      console.log('THERE WAS AN ERROR GETTING API DATA---> ', err);
      callback(err, null);
    });
};

module.exports = {
getDrinks
};