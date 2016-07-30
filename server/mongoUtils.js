// require dependencies.
var mongoose = require('mongoose'),
    bcrypt   = require('bcrypt-nodejs'),
    Q        = require('q'),
    SALT_WORK_FACTOR = 10;

// below is an example of a Schema for mongo using mongoose.
var UserSchema = new mongoose.Schema({
		username: {
			type: String,
			require: true,
			uniq: true
		},
		email: {
			type: String,
			require: true,
			uniq: true
		}
		,
		password: {
			type: String,
			require: true
		},
		salt: String
});
// create a model of your schema and export it.
module.exports = mongoose.model('users', UserSchema);