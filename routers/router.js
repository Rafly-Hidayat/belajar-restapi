'use strict'

module.exports = (app) => {
    const jsonku = require('../controller/controller')

    app.route('/')
        .get(jsonku.index)
}