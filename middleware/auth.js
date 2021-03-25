const con = require('../config/db')
const mysql = require('mysql')
const md5 = require('MD5')
const jwt = require('jsonwebtoken')
const config = require('../config/secret')
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

    },

    login: (req, res) => {
        const post = {
            password: req.body.password,
            email: req.body.email
        }

        let query = "SELECT * FROM ?? WHERE ??=? AND ??=?"
        let table = ["user", "password", md5(post.password), "email", post.email]

        query = mysql.format(query, table)

        con.query(query, (e, rows) => {
            if(e) throw(e)
            if(rows.length == 1){
                let token = jwt.sign({rows}, config.secret, {expiresIn: 1800})

                id_user = rows[0].id

                const data = {
                    id_user: id_user,
                    akses_token: token,
                    alamat_ip: ip.address()
                }

                let query = "INSERT INTO ?? SET ?"
                let table = ["akses_token"]

                query = mysql.format(query, table)
                con.query(query, data, (e, rows) => {
                    if(e) throw(e)
                     res.json({
                         status: true,
                         message: "Berhasil menggenerate token",
                         token: token,
                         user: data.id_user
                     })
                })

            } else {
                 res.json({error: true, message: "Email atau Password salah"});
            }
        })
    },

    halamanadmin: (req, res) => {
        response.ok("Ini adalah halaman Admin", res)
    }



}

