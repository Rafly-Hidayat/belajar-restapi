const express = require('express')
const routerMhs = require('./routers/mahasiswa_router')
const routerAuth = require('./routers/auth_router')
const routerMtklh = require('./routers/matakuliah_router')
const app = express()
const port = 3000
const con = require('./config/db')
const morgan = require('morgan')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(morgan('dev'))


// connecting route to database
app.use(function(req, res, next) {
  req.con = con
  next()
})

app.use(routerMhs)
app.use(routerAuth)
app.use(routerMtklh)

app.listen(port, () => {
  console.log(`Server is running!`)
})