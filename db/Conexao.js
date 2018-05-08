const mysql = require('mysql')

module.exports = function (){
    return mysql.createConnection({
        user: 'root',
        password: '',
        database: 'cdc',
        host: 'localhost',
        port: 32768
    })
}
