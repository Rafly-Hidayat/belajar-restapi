'use strict';

const resposnse = require('../res')
const connection = require('../database/connection')

exports.index = (req, res) => {
    resposnse.ok('Aplikasi REST API berjalan')
}