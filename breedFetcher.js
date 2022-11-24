const request = require('request');

const fetchBreed = (breed) => request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
  if (err) {
    console.log('Invalid URL');
    return;
  }
  
  const data = JSON.parse(body)[0];

  if (!data) {
    console.log('Unable to find information on the requested breed.');
    return;
  }

  console.log(data.description);
});


const args = process.argv.slice(2);
fetchBreed(args[0]);
