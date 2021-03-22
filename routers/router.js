'use strict'

const express = require('express')
const router = express.Router()
const mhsController = require('../controller/controller')

    router.get('/', mhsController.index)

    router.get('/mahasiswa', mhsController.mhs)
    
    router.get('/mahasiswa/:id', mhsController.tampilmhsid)

    router.post('/tambah', mhsController.tambah)

module.exports = router