const mongose = require('mongoose')

URI = ('mongodb://localhost/27017')

mongose.connect(URI)
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err=>console.log(err))


module.export = mongose
