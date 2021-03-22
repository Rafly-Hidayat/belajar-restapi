'use strict'

const express = require('express')
const router = express.Router()
const mhsController = require('../controller/controller')


    router.get('/mahasiswa', mhsController.mhs)
    
    router.get('/mahasiswa/:id', mhsController.tampilmhsid)

    router.post('/mahasiswa/tambah', mhsController.tambah)

    router.put('/mahasiswa/ubah/:id', mhsController.ubah)

module.exports = router