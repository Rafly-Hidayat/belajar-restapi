'use strict';

const response = require('../res')
const connection = require('../database/connection')


module.exports = {
    index: (req, res) => {
        resposnse.ok('Aplikasi REST API berjalan', res)
    },

    // menampilkan tabel mahasiswa
    mhs: (req, res) => {
        connection.query('SELECT * FROM mahasiswa', (e, rows, fields) => {
            if(e){
                console.log(e)
            } else {
                response.ok(rows, res)
            }
        })
    },

    // menampilkan tabel mahasiswa berdasarkan id
    tampilmhsid: (req, res) =>{
        let id = req.params.id
        connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', (id), (e, rows, fields) =>{
            if(e){
                console.log(e)
            } else {
                response.ok(rows, res)
            }
        })
    },






}