const axios = require('axios');
const headers = { Authorization: '1' };

const getDrinks = (params, callback) => {
  axios
    .get('http://www.thecocktaildb.com/api/json/v1/1/search.php', {
      params,
      headers
    })
    .then((drinks) => {
      console.log('HERE IS THE API GET DATA---> ', drinks);
      callback(null, drinks);
    })
    .catch((err) => {
      console.log('THERE WAS AN ERROR GETTING API DATA in getDrinks---> ', err);
      callback(err, null);
    });
};

const getIngDrinks = (params, callback) => {
  console.log('params--->', params)
  axios
    .get('http://www.thecocktaildb.com/api/json/v1/1/filter.php', {
      params,
      headers
    })
    .then((drinks) => {
      console.log('HERE IS THE API GET ING DATA---> ', drinks);
      callback(null, drinks);
    })
    .catch((err) => {
      console.log('THERE WAS AN ERROR GETTING API DATA in getIngDrinks ---> ', err);
      callback(err, null);
    });
};

module.exports = {
getDrinks,
getIngDrinks
};




/*
I: Root Node, Int (key)
O: Root of new tree w/ key node removed
C: Will contain key node, both left and right, no duplicates
E:

{ value: 5
  left: 2
  right: 12
}

// set variable current node to root node value
// if the key is greater than the current node and right node is not null
  // call function recursively on right node value

// else if the key is less than the current node and left node is not null
  // call function recursively on left node value

// else
  // if left node or right node are null

  // else if left and right node are null

  // else


*/