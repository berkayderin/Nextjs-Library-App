const mongoose = require('mongoose')

const conn = () => {
	mongoose
		.connect(process.env.NEXT_PUBLIC_MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then(() => {
			console.log('Veritabanına bağlanıldı.')
		})
		.catch((err) => {
			console.log(`Veritabanına bağlanılamadı: ${err}`)
		})
}

module.exports = conn
