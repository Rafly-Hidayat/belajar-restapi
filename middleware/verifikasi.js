const jwt = require('jsonwebtoken')
const config = require('../config/secret')


function verifikasiAdmin () {
        return (req, rest, next) => {
            const role = req.body.role
            // cek authorization
            const tokenBearer = req.headers.authorization
            if(tokenBearer){
                const token = tokenBearer.split(' ')[1]
                // verifikasi
                jwt.verify(token, config.secret, (e, decoded) => {
                    if(e) {
                        return rest.status(401).send({auth: false, message: "Token tidak terdaftar"})
                    } else {
                        if(role == 1){
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
        }
    }
    
    function verifikasiUser () {
            return (req, rest, next) => {
                const role = req.body.role
                // cek authorization
                const tokenBearer = req.headers.authorization
                if(tokenBearer){
                    const token = tokenBearer.split(' ')[1]
                    // verifikasi
                    jwt.verify(token, config.secret, (e, decoded) => {
                        if(e) {
                            return rest.status(401).send({auth: false, message: "Token tidak terdaftar"})
                        } else {
                            if(role == 2){
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
            }
        }

module.exports = {verifikasiAdmin, verifikasiUser}
