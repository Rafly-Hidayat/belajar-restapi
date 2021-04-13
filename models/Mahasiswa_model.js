'use strict';

module.exports = {
    get: (con, data, limit, offset, callback) => {
        con.query(`SELECT * FROM mahasiswa WHERE nama LIKE '%${data.search}%' OR nrp LIKE '%${data.search}%' OR jurusan LIKE '%${data.search}%' LIMIT ${limit} OFFSET ${offset} `, callback)
    },

    ASC: (con, data, callback) => {
        con.query(`SELECT * FROM mahasiswa ORDER BY ${data.orderBy} ASC`, callback)
    },

    DESC: (con, data, callback) => {
        con.query(`SELECT * FROM mahasiswa ORDER BY ${data.orderBy} DESC`, callback)
    },

    getbyid: (con, id, callback) => {
        con.query(`SELECT * FROM mahasiswa WHERE id_mahasiswa = ${id}`, callback)
    },

    create: (con, data, callback) => {
        con.query(`INSERT INTO mahasiswa SET nrp = '${data.nrp}',nama = '${data.nama}',jurusan = '${data.jurusan}'`, callback)
    },

    update: (con, data, id, callback) => {
        con.query(`UPDATE mahasiswa SET nrp = '${data.nrp}',nama = '${data.nama}',jurusan = '${data.jurusan}' WHERE id_mahasiswa = ${id}`, callback)
    },

    delete: (con, id, callback) => {
        con.query(`DELETE FROM mahasiswa WHERE id_mahasiswa = ${id}`, callback)
    }

}
