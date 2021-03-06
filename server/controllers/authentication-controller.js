var mongoose = require('mongoose');
var User     = require('../datasets/users');

module.exports.signup = function(req, res){
  var user = new User(req.body);
  user.save();

  res.json(req.body);
}

module.exports.login = function(req, res){
  User.find(req.body, function(err, results){
    if(err){
      console.log("Error Out");
    }
    if(results && results.length === 1){
      var userData = results[0];
      res.json({
        _id: userData._id,
        email: req.body.email,
        username: userData.username,
        image: userData.image
      });
      console.log(results);
    }
  })
}
