const request = require('request');

const fetchBreedDesc = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (err, response, body) => {
      if (err) {
        return callback(err, null);
      }
      const data = JSON.parse(body)[0];

      if (!data) {
        return callback(err, null);
      }
    
      return callback(null, data.description);
    });
};

module.exports = {
  fetchBreedDesc
};