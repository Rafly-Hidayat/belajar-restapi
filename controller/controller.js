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
    tampilmhsid: (req, res) => {
        const id = req.params.id
        connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', (id), (e, rows, fields) =>{
            if(e){
                console.log(e)
            } else {
                response.ok(rows, res)
            }
        })
    },

    // menambahkan data mahasiswa
    tambah: (req, res) => {
        let nrp =req.body.nrp 
        let nama =req.body.nama 
        let jurusan =req.body.jurusan
        
        connection.query('INSERT INTO mahasiswa (nrp, nama, jurusan) VALUES(?,?,?) ',[nrp, nama, jurusan], (e, rows, fields) => {
            if(e){
                console.log(e)
            } else {
                response.ok('Data berhasil di tambahkan!', res)
            }
        })
    }




}