var User = require('../datasets/users');
var fs   = require('fs-extra');
var path = require('path');
var mv   = require('mv');

module.exports.updatePhoto = function(req, res){
  var file = req.files.file;
  var userId = req.body.userID;

  console.log('User ' + userId + ' is submitting ' , file);
  var uploadDate = new Date().toISOString;

  var tempPath = file.path;
  var targetPath = path.join(__dirname, '../../uploads/' + userId + uploadDate + file.name);

  fs.rename(tempPath, targetPath, function(err){
    if(err){
      console.log(err);
    }else{
      console.log('file moved');
    }
  });
}