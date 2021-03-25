'use strict';

module.exports = {
    get: (con, callback) => {
        con.query('SELECT * FROM mahasiswa', callback)
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
    },

    getmatakuliah: (con, callback) => {
        con.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nrp, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa', callback)
    }
    
}
