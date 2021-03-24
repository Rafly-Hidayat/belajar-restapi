'use strict';

const mahasiswa = require('../models/Mahasiswa_model')

module.exports = {

    // menampilkan tabel mahasiswa
    mhs: (req, res) => {
        mahasiswa.get(req.con, (e, rows) => {
            if(e) throw (e)
            mahasiswa.ok(rows, res)
        })
    },

    // menampilkan tabel mahasiswa berdasarkan id
    tampilmhsid: (req, res) => {
        mahasiswa.getbyid(req.con, req.params.id, (e, rows) => {
            if(e) throw (e)
            mahasiswa.ok(rows, res)
        })
    },

    // menambahkan data mahasiswa
    tambah: (req, res) => {
        mahasiswa.create(req.con, req.body, (e, rows) => {
            if(e) throw(e)
            mahasiswa.ok("Data berhasil di tambahkan", res)
        })
    },
    
    // mengubah data berdasarkan id
    ubah: (req, res) => {
        mahasiswa.update(req.con, req.body, req.params.id, (e) => {
            if(e) throw(e)
            mahasiswa.ok("Data berhasil di ubah", res)
        })
    },

    // menghapus data berdasarkan id
    hapus: (req, res) => {
        mahasiswa.delete(req.con, req.params.id, (e) => {
            if(e) throw(e)
            mahasiswa.ok("Data berhasil di hapus", res)
        })
    },

    // tampilkan matakuliah yang di ambil mahasiswa
    matakuliah: (req, res) => {
        mahasiswa.getmatakuliah(req.con, (e, rows) => {
            if(e) throw(e)
            mahasiswa.nes(rows, res)
        })
    }


}