'use strict'

const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const verifikasi = require('../middleware/verifikasi')
const validation = require('../validation/validation')

    router.post('/register', validation.register, auth.register)
    
    router.post('/login', validation.login, auth.login)
    
    router.get('/admin', verifikasi.verifikasiAdmin(), auth.halamanadmin)
    
    router.get('/user', verifikasi.verifikasiUser(), auth.halamanuser)

module.exports = router