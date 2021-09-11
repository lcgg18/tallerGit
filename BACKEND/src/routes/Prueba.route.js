const{Router} = require('express')

const route = Router()

const PruebaCrtl = require('../controller/Prueba.Controller.js')

route.get('/', PruebaCrtl.obtener)

module.exports = route
