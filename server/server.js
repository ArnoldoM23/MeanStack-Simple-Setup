// require dependencies and database file.
var express = require('express');
var bodyParser = require('body-parser');
var mongoUtils = require('./mongoUtils');
// connnect to database and server.
mongoUtils.connect();
var app = express();
// use dependencies
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));


app.get('/names', function(req, res){
	var names = mongoUtils.names();
	names.find().toArray(function(err, docs){
		console.log()
		var name = docs.map(function(obj){return obj.name})
		res.json(name);
	});
});
// listen for connection
app.listen(8000, function(){
	console.log('Listening on 8000');
});