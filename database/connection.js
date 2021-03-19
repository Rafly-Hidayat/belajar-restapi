const mysql = require('mysql')

// koneksi ke database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbrestapi'
})

conn.connect( (e) => {
    if(e) throw e
    console.log('database terkoneksi')
})

module.exports = conn