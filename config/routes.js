const express = require('express')
const auth = require('./auth')

module.exports = function (server) {
	// rotas publicadas //

	const openApi = express.Router()
	server.use('/oapi', openApi)

	const AuthService = require('../api/user/authService')
	openApi.post('/login', AuthService.login)
	openApi.post('/signup', AuthService.signup)
	openApi.post('/validateToken', AuthService.validateToken)
	
	const TramitadorService = require('../api/tramitador/tramitadorService')
	TramitadorService.register(openApi, '/tramitador')
	//Rotas protegidas
	//const protectedApi = express.Router()
	//server.use('/api', protectedApi)

	//protectedApi.use(auth)
	/*

	const billingCycleService = require('../.././.caminho')
	billingCycleService.register(protectedApi, '/billingCycles')
	*/
}
