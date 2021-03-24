const express = require('express')
const routerMhs = require('./routers/mahasiswa_router')
const app = express()
const port = 3000
const con = require('./config/database/connection')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// connecting route to database
app.use(function(req, res, next) {
  req.con = con
  next()
})

app.use(routerMhs)

app.listen(port, () => {
  console.log(`Server is running!`)
})