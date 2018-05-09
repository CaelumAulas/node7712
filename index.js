const servidor = require('./servidor')

servidor.listen(process.env.PORT || 3000, function(){
    console.log("Rodou o servidor")
})
