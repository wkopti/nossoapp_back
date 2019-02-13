const restful = require('node-restful')
const mongoose = restful.mongoose

const tramitadorSchema = new mongoose.Schema({
	nome: { type: String, required: true },
	email: { type: String, required: true},
	telefone: { type: Number, required: true}
})

module.exports = restful.model('Tramitador', tramitadorSchema)
