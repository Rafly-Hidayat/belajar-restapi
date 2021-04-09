const response = require('../models/res')
const krs = require('../models/Matakuliah_model')

module.exports = {

    // tampilkan KRS mahasiswa
    index: (req, res) => {
        krs.getKrs(req.con, (e, rows) => {
            if(e) throw(e)
            response.nes(rows, res)
        })
    },

    // tampilkan KRS mahasiswa berdasarkan id
    tampilbyid: (req, res) => {
        krs.getbyid(req.con, req.params.id, (e, rows) => {
            if(e) throw (e)
            rows.length > 0 ? response.nes(rows, res) : response.ok("Id tidak di temukan", res)
        })
    },

    // tambah matakuliah di KRS mahasiswa
    tambah: (req, res) => {
        krs.create(req.con, req.body, e => {
            if(e) throw(e)
            response.ok("Berhasil menambahkan KRS mahasiswa", res)
        })
    },

    // hapus matakuliah di krs mahasiswa
    hapus: (req,res) => {
        krs.update(req.con, req.body, req.params.id, e => {
            if(e) throw e
            response.ok("Berhasil menghapus matakuliah di krs mahasiswa", res)
        })
    }

}