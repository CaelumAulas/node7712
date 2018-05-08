const HomeController = require('../controllers/home')

module.exports = function(servidor){
    servidor.get("/", HomeController.index)
}