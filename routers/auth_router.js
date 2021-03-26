'use strict'

const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const verifikasi = require('../middleware/verifikasi')

    router.post('/register', auth.register)
    
    router.post('/login', auth.login)
    
    router.get('/admin', verifikasi.verifikasiAdmin(), auth.halamanadmin)
    
    router.get('/user', verifikasi.verifikasiUser(), auth.halamanuser)

module.exports = router