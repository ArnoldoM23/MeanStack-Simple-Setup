// require dependencies and files.
var mongodb = require('mongodb');
// create client for connection
var client = mongodb.MongoClient;
// create a database variable
var _db;

// export the connection and the database.
module.exports = {
	// this is the connectin method .
	connect(){
		// connect the client to the db by invoking the connect function. It takes two parameters route to the db. syntax is  "mongodb:[localhost]:[port]/[name of db]. note the brackets are just to make example of what goes there, but you dont use the brackets. It takes a callback with two parameters and err and the db.
		client.connect('mongodb://localhost:27017/MVP', function (err, db) {
			// check for error
			if (err) {
				console.log("Error connecting to mongodb")
				process.exit(1);
			}
			// if no error connect to your log that you are connected and assign your db to your db variable you created above
			_db = db;
			console.log("Connected to mongo")
		})
	},
	// create another method that return a collection
	names(){
		// simply return the db variable and invoke the collection method and pass in the name of the collection 
		return _db.collection('users')
	}
}