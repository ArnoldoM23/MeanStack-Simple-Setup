// require dependencies and database file.
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongoUtils = require('./mongoUtils');
// connnect to database and server.
mongoose.connect('mongodb://localhost/DATABASE_NAME_HERE');
var app = express();
// use dependencies
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));


app.get('/names', function(req, res){
	app.send('hello world')
});
// listen for connection
app.listen(8000, function(){
	console.log('Listening on 8000');
});