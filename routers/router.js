'use strict'

const express = require('express')
const router = express.Router()
const mhsController = require('../controller/controller')


    router.route('/mahasiswa')  
        .get(mhsController.mhs)
        .post(mhsController.tambah)
    
    router.get('/mahasiswa/:id', mhsController.tampilmhsid)

    router.put('/mahasiswa/:id', mhsController.ubah)
    
    router.delete('/mahasiswa/:id', mhsController.hapus)

module.exports = router