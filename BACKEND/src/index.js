const express = require('express')
const app = express()

app.set('Port', 4000)

//start serve

app.listen(app.set('Port'), ()=>{
    console.log("Ejecuntado en el puerto", app.get('Port'))
})

// Rutas

app.use('/api', require('./routes/Prueba.route.js'))
