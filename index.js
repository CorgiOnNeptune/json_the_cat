const { fetchBreedDesc } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDesc(breedName, (err, desc) => {
  if (err) {
    return console.log('Error fetch details:', err);
  }
  return console.log(desc);
});