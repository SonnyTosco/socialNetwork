var express     = require('express'),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost:27017/time-waste')

app.use('/app', express.static(__dirname + '/app'));
app.use('node_modules', express.static(__dirname + '/node_modules'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

app.listen('3000', function(){
  console.log('Listening on Port 3000');
})
