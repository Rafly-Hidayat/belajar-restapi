'use strict'

module.exports = {    
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