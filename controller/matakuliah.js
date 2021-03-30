const response = require('../models/res')
const matakuliah = require('../models/Matakuliah_model')
const res = require('../models/res')

module.exports = {

    // tampilkan matakuliah yang di ambil mahasiswa
    index: (req, res) => {
        matakuliah.getmatakuliah(req.con, (e, rows) => {
            if(e) throw(e)
            response.nes(rows, res)
        })
    },

    // tampilkan matakuliah berdasarkan id
    tampilbyid: (req, res) => {
        matakuliah.getbyid(req.con, req.params.id, (e, rows) => {
            if(e) throw (e)
            rows.length > 0 ? response.nes(rows, res) : response.ok("Id tidak di temukan", res)
        })
    },

    // nambah matakuliah
    tambah: (req, res) => {
        matakuliah.create(req.con, req.body, (e, rows) => {
            if(e) throw(e)
            response.ok("Berhasil menambahkan KRS mahasiswa", res)
        })
    }

}