const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const myLogger = (req, res, next) => {
  req.time = new Date()
  next()
}


app.listen(port, () => {
  console.log(`Server is running!`)
})