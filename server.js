const express = require('express')
const routerMhs = require('./routers/router')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(routerMhs)

app.listen(port, () => {
  console.log(`Server is running!`)
})