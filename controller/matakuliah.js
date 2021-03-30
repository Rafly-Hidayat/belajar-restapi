const response = require('../models/res')
const matakuliah = require('../models/Matakuliah_model')
const res = require('../models/res')

module.exports = {

    // tampilkan KRS mahasiswa
    index: (req, res) => {
        matakuliah.getmatakuliah(req.con, (e, rows) => {
            if(e) throw(e)
            response.nes(rows, res)
        })
    },

    // tampilkan KRS mahasiswa berdasarkan id
    tampilbyid: (req, res) => {
        matakuliah.getbyid(req.con, req.params.id, (e, rows) => {
            if(e) throw (e)
            rows.length > 0 ? response.nes(rows, res) : response.ok("Id tidak di temukan", res)
        })
    },

    // tambah matakuliah di KRS mahasiswa
    tambah: (req, res) => {
        matakuliah.create(req.con, req.body, (e, rows) => {
            if(e) throw(e)
            response.ok("Berhasil menambahkan KRS mahasiswa", res)
        })
    }

}