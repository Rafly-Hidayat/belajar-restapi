'use strict';

const mahasiswa = require('../models/Mahasiswa_model')
const response = require('../models/res')

module.exports = {

    // menampilkan tabel mahasiswa
    mhs: (req, res) => {
        mahasiswa.get(req.con, (e, rows) => {
            if(e) throw (e)
            response.ok(rows, res)
        })
    },

    // menampilkan tabel mahasiswa berdasarkan id
    tampilmhsid: (req, res) => {
        mahasiswa.getbyid(req.con, req.params.id, (e, rows) => {
            if(e) throw (e)
            if(rows.length > 0){
                response.ok(rows, res)
            } else {
                response.ok("Data tidak di temukan", res)
            }
        })
    },

    // menambahkan data mahasiswa
    tambah: (req, res) => {
        mahasiswa.create(req.con, req.body, (e, rows) => {
            if(e) throw(e)
            response.ok("Data berhasil di tambahkan", res)
        })
    },
    
    // mengubah data berdasarkan id
    ubah: (req, res) => {
        mahasiswa.update(req.con, req.body, req.params.id, (e) => {
            if(e) throw(e)
            response.ok("Data berhasil di ubah", res)
        })
    },

    // menghapus data berdasarkan id
    hapus: (req, res) => {
        mahasiswa.delete(req.con, req.params.id, (e) => {
            if(e) throw(e)
            response.ok("Data berhasil di hapus", res)
        })
    }

}