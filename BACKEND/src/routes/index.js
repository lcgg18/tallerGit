const express = require('express')
const app = express()

app.set('port', 4000)

//start serve

app.listen(app.set('port'), ()=>{
    console.log("Ejecuntado en el puerto")
})