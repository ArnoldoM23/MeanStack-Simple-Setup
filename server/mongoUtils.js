var mongoose = require('mongoose'),
    bcrypt   = require('bcrypt-nodejs'),
    Q        = require('q'),
    SALT_WORK_FACTOR = 10;

// export the connection and the database.
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

module.exports = mongoose.model('users', UserSchema);