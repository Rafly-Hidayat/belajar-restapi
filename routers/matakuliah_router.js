
const express = require('express')
const router = express.Router()
const mtklhController = require('../controller/matakuliah')


router.get('/krs', mtklhController.index)

router.get('/krs/:id', mtklhController.tampilbyid)

router.post('/krs/tambah', mtklhController.tambah)

router.delete('/krs/hapus/:id', mtklhController.hapus)

module.exports = router