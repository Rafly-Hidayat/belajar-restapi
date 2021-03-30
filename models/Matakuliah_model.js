
module.exports = {

    getmatakuliah: (con, callback) => {
        con.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nrp, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa', callback)
    },

    getbyid: (con, id, callback) => {
        con.query(`SELECT mahasiswa.id_mahasiswa, mahasiswa.nrp, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa AND mahasiswa.id_mahasiswa = ${id} ORDER BY mahasiswa.id_mahasiswa`, callback)
    },

    create: (con, data, callback) => {
        con.query(`INSERT INTO krs SET id_mahasiswa = ${data.id_mahasiswa}, id_matakuliah = ${data.id_matakuliah}`, callback)
    }

}