const mysql = require('mysql')
module.exports = mysql.createPool({
    user: 'root',
    password: '',
    database: 'cdc',
    host: 'localhost',
    port: 32768
})