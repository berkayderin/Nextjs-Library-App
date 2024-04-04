const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	publisher: {
		type: String,
		required: true
	},
	publishAt: {
		type: Number,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Book', BookSchema)
