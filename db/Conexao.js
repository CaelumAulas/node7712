const mysql = require('mysql')

// const nomeBanco = process.env.AMBIENTE == 'test' ? 'cdc-test' : 'cdc'

module.exports = function (){
    return mysql.createConnection({
        user: 'root',
        password: '',
        database: 'cdc',
        host: 'localhost',
        port: 32768
    })
}
