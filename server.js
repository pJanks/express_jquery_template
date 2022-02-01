// require necessary frameworks etc.
const port = 3001
const http = require('http')
const express = require('express')
const app = express()

const server = http.createServer(app).listen(port, () => console.log(`----- sever running on port: ${port} -----`))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))