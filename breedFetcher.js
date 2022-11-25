const request = require('request');

const fetchBreedDesc = (breed, callback) => {
  request(`https://api.thechatapi.com/v1/breeds/search?q=${breed}`,
    (err, response, body) => {
      if (err) {
        return callback(`${err.message}`);
      }
      const data = JSON.parse(body)[0];

      if (!data) {
        return callback('Unable to find information on the requested breed.');
      }
    
      return callback(null, data.description);
    });
};

module.exports = {
  fetchBreedDesc
};