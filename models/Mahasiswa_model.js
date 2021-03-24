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
    },
    
    ok: (values, res) => {
        const data = {
            'status': 200,
            'values': values
        }
    
         res.json(data)
         res.end()
    },

    nes: (values, res) => {
        // akumulasi
        const hasil = values.reduce((akumulasikan, item) => {
            // tentukan key group
            if(akumulasikan[item.nama]){

                const group = akumulasikan[item.nama]

                if(Array.isArray(group.matakuliah)){
                    group.matakuliah.push(item.matakuliah)
                
                } else {
                    group.matakuliah = [group.matakuliah, item.matakuliah]
                }

            } else {
                akumulasikan[item.nama] = item
            }

            return akumulasikan
        }, {})

        const data = {
            'status': 200,
            'values': hasil
        }

         res.json(data)
         res.end()
    }

    
}
