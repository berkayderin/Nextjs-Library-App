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
		type: Date,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

const Book = mongoose.models.Book || mongoose.model('Book', BookSchema)

module.exports = Book
