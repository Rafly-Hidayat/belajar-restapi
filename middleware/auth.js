const con = require('../config/db')
const mysql = require('mysql')
const md5 = require('MD5')
const jwt = require('jsonwebtoken')
const secret = require('../config/secret')
const ip = require('ip')
const response = require('../models/res')


module.exports = {

    // controller register
    register: (req, res) => {
        const post = {
            username: req.body.username,
            email: req.body.email,
            password: md5(req.body.password),
            role: req.body.role,
            tanggal_daftar: new Date()
        }

        let query = "SELECT email FROM ?? WHERE ??=?"
        let table = ["user", "email", post.email]

        query = mysql.format(query, table)

        con.query(query, (e, rows) => {
            if(e) throw (e)
            if(rows.length == 0){
                let query = "INSERT INTO ?? SET ?"
                let table = ["user"]
                query = mysql.format(query, table)
                con.query(query, post, (e, rows) => {
                    if(e) throw(e)
                    response.ok("Berhasil menambahkan user baru", res)
                })
            } else {
                response.ok("Email sudah terdaftar!", res)
            }
        })

    }



}

