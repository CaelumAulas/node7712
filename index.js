const servidor = require('./servidor')

require('./routes/produtos')(servidor)
require('./routes/home')(servidor)

servidor.listen(3000)