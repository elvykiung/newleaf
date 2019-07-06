// Dependencies
var db = require('../models');
var axios = require('axios');
// Routes

module.exports = function(app) {
  // Get route for returning posts of a specific category
  app.get('/api/plants/common_name/:common_name', function(req, res) {
    var name = req.params.common_name;
    axios
      .get('https://trefle.io/api/species?token=Q29sNjhwTjcvOFhOU0N5YVBxVU0ydz09&common_name=' + name)
      .then(function(response) {
        console.log('calling trefle' + response.data);
        res.json(response.data);
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('---------------Data---------------');
          console.log(error.response.data);
          console.log('---------------Status---------------');
          console.log(error.response.status);
          console.log('---------------Status---------------');
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  });
};
