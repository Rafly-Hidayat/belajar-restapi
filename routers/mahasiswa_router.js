'use strict'

const express = require('express')
const router = express.Router()
const mhsController = require('../controller/mahasiswa')
const auth = require('../middleware/auth')


    router.get('/mahasiswa', mhsController.mhs)
    
    router.get('/mahasiswa/:id', mhsController.tampilmhsid)
    
    router.post('/tambah', mhsController.tambah)
    
    router.put('/ubah/:id', mhsController.ubah)
    
    router.delete('/hapus/:id', mhsController.hapus)
    
    router.get('/matakuliah', mhsController.matakuliah)

    router.post('/register', auth.register)
    
    router.post('/login', auth.login)

    module.exports = router