const jwt = require('jsonwebtoken')
const config = require('../config/secret')
const con = require('../config/db')


function verifikasiAdmin () {
        return (req, rest, next) => {
            con.query('SELECT * FROM role', (e, result) => {
                if (e) throw e

                let Admin = result.map((obj) => {
                    return obj.Admin
                })

                const role = Admin

                // cek authorization
                const tokenBearer = req.headers.authorization
                if(tokenBearer){
                    const token = tokenBearer.split(' ')[1]

                    // verifikasi
                    jwt.verify(token, config.secret, (e, decoded) => {
                        if(e) {
                            return rest.status(401).send({auth: false, message: "Token tidak terdaftar"})
                        } else {
                            if(role == Admin){
                                req.auth = decoded
                                next()
                            } else {
                                return rest.status(401).send({auth: false, message: "Halaman ini bukan untuk anda"})                        
                            }
                        }
                    })
                } else {
                    return rest.status(401).send({auth: false, message: "Token tidak tersedia"})
                }
            })
        }
    }
    
    function verifikasiUser () {
            return (req, rest, next) => {
                con.query('SELECT * FROM role', (e, result) => {
                    if (e) throw e

                    let User = result.map((obj) => {
                        return obj.User
                    })

                    const role = User

                    // cek authorization
                    const tokenBearer = req.headers.authorization
                    if(tokenBearer){
                        const token = tokenBearer.split(' ')[1]
                        // verifikasi
                        jwt.verify(token, config.secret, (e, decoded) => {
                            if(e) {
                                return rest.status(401).send({auth: false, message: "Token tidak terdaftar"})
                            } else {
                                if(role == User){
                                    req.auth = decoded
                                    next() 
                                } else {
                                    return rest.status(401).send({auth: false, message: "Halaman ini bukan untuk anda"})                        
                                }
                            }
                        })
                    } else {
                        return rest.status(401).send({auth: false, message: "Token tidak tersedia"})
                    }
                })
            }
        }

module.exports = {verifikasiAdmin, verifikasiUser}
