const express = require('express')

module.exports = function (server) {
	const router = express.Router()
	server.use('/api', router)

	const tramitadorService = require('../api/tramitador/tramitadorService')
	tramitadorService.register(router, '/tramitador')
}
