
const express = require('express')
const router = express.Router()
const mtklhController = require('../controller/matakuliah')


router.get('/matakuliah', mtklhController.index)

router.get('/matakuliah/:id', mtklhController.tampilbyid)

router.post('/matakuliah/tambah', mtklhController.tambah)

module.exports = router