'use strict'

module.exports = (app) => {
    const mhsController = require('../controller/controller')

    app.route('/')
        .get(mhsController.index)

    app.route('/mahasiswa')
        .get(mhsController.mhs)
    
    app.route('/mahasiswa/:id')
        .get(mhsController.tampilmhsid)

    app.route('/tambah')
        .post(mhsController.tambah)
}