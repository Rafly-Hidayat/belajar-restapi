'use strict'

module.exports = (app) => {
    const jsonku = require('../controller/controller')

    app.route('/')
        .get(jsonku.index)

    app.route('/mahasiswa')
        .get(jsonku.mhs)
    
    app.route('/mahasiswa/:id')
        .get(jsonku.tampilmhsid)
}