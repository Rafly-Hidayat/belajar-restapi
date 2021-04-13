'use strict'

const express = require('express')
const router = express.Router()
const mhsController = require('../controller/mahasiswa')


    router.get('/mahasiswa', mhsController.mhs)

    router.get('/orderBy/ASC', mhsController.orderByASC)

    router.get('/orderBy/DESC', mhsController.orderByDESC)

    router.get('/mahasiswa/:id', mhsController.tampilmhsid)

    router.post('/tambah', mhsController.tambah)

    router.put('/ubah/:id', mhsController.ubah)

    router.delete('/hapus/:id', mhsController.hapus)
    
module.exports = router