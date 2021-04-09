const con = require('../config/db')
const md5 = require('MD5')
const jwt = require('jsonwebtoken')
const config = require('../config/secret')
const ip = require('ip')
const response = require('../models/res')


module.exports = {

    // controller register
    register: (req, res) => {
        con.beginTransaction((e) => {
            if (e) throw e

            const post = {
                username: req.body.username,
                email: req.body.email,
                password: md5(req.body.password),
                tanggal_daftar: new Date()
            }

            con.query('SELECT email FROM user WHERE email = ?', [post.email], (e, rows) => {
                if(e) throw e

                if(rows.length == 0){
                    con.query('INSERT INTO user SET ?', [post], (e, rows) => {
                        if(e) throw e

                        con.query('SELECT * FROM role WHERE id = 2', (e, result) => {
                            if (e) throw e
                            let roleID = result.map(obj => obj.id )

                            con.query('SELECT * FROM user WHERE email = ?', [post.email], (e, rows) => {
                                if (e) throw e
                                id_user = rows[0].id

                                const data = {
                                    id_user: id_user
                                }

                                con.query('INSERT INTO role_user (role_id, user_id, email) VALUES (?,?,?)', [roleID, data.id_user, post.email], (e) => {
                                    if (e) throw e
                                    response.ok("Berhasil menambahkan user baru", res)
                                    con.commit((e)=> {
                                        if (e){
                                            con.rollback()
                                            throw e
                                        }
                                    })
                                })
                            })
                        })
                    })

                } else {
                    response.ok("Email sudah terdaftar!", res)
                    con.rollback()
                }
            })
        })
    },

    login: (req, res) => {
        const post = {
            password: req.body.password,
            email: req.body.email
        }

        con.query('SELECT * FROM user WHERE password = ? AND email = ?',[md5(post.password), post.email], (e, rows) => {
            if(e) throw(e)
            if(rows.length == 1){
                let token = jwt.sign({rows}, config.secret, {expiresIn: 300})

                id_user = rows[0].id

                const data = {
                    id_user: id_user,
                    akses_token: token,
                    alamat_ip: ip.address()
                }

                con.query('INSERT INTO akses_token SET ?', [data], (e, rows) => {
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
    },

    halamanuser: (req, res) => {
        response.ok("Ini adalah halaman User", res)
    }


}

