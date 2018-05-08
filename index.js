const servidor = require('./servidor')

require('./routes/produtos')(servidor)

servidor.listen(3000)