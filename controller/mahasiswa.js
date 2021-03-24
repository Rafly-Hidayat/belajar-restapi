'use strict';

const response = require('../res')
const connection = require('../database/connection')


module.exports = {

    // menampilkan tabel mahasiswa
    mhs: (req, res) => {
        connection.query('SELECT * FROM mahasiswa', (e, rows,) => {
            if(e) throw(e)

            response.ok(rows, res)
        })
    },

    // menampilkan tabel mahasiswa berdasarkan id
    tampilmhsid: (req, res) => {
        const id = req.params.id
        connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', id, (e, rows,) =>{
            if(e) throw(e)

            response.ok(rows, res)
        })
    },

    // menambahkan data mahasiswa
    tambah: (req, res) => {
        const data = {
            nrp: req.body.nrp,
            nama: req.body.nama,
            jurusan: req.body.jurusan
        }
        connection.query('INSERT INTO mahasiswa SET ? ', data , (e) => {
            if(e) throw(e)

            response.ok("Data berhasil di tambahkan", data, res)
        })
    },
    
    // mengubah data berdasarkan id
    ubah: (req, res) => {
        const id = req.params.id
        const data = {
            nrp: req.body.nrp,
            nama: req.body.nama,
            jurusan: req.body.jurusan
        }

        connection.query('UPDATE mahasiswa SET ? WHERE id_mahasiswa=?', [data,id] , (e) => {
            if(e) throw (e)

            response.ok("Data berhasil di ubah", res)
        })
        
    },

    // menghapus data berdasarkan id
    hapus: (req, res) => {
        const id = req.params.id
        
        connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa = ?', id , (e) =>{
            if(e) throw (e)

            response.ok("Data berhasil di hapus", res)
        })
    }


}