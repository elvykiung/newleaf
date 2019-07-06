// Dependencies
var db = require('../models');

// Routes

module.exports = function(app) {
  // Get route for returning posts of a specific category
  app.get('/api/plants/common_name/:common_name', function(req, res) {
    db.Plants.findAll({
      where: {
        common_name: req.params.common_name
      }
    }).then(function(dbPlants) {
      res.json(dbPlants);
    });
  });
};
