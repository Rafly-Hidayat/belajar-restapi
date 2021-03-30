'use strict';

module.exports = {
    get: (con, limit, offset, callback) => {
        con.query(`SELECT * FROM mahasiswa LIMIT ${limit} OFFSET ${offset}`, callback)
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
