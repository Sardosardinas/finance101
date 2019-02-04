const mongoose = require('mongoose')

const Schema = mongoose.Schema

var UserSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	passConfirmation: {
		type: String,
		required: true,
	}
})

let User = mongoose.model('User', UserSchema)

module.exports = User
