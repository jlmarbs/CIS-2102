const express = require("express")
const path = require("path")

const app = express()
const port = 3000

const cors = require("cors")
const mysql = require('mysql2')
const { error } = require("console")

app.use(cors())
app.use(express.json())

const userList = [
  { id: 1, name: "Patrick", age: 27 },
  { id: 2, name: "Gran", age: 28 },
  { id: 3, name: "Ean", age: 29 },
]

// const con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'anydatabasename'
// })

// app.get('/getPersons', (req, res) => {
//   con.query('SELECT * FROM `persons`', (error, data) => { // error is always at first then data is next
//     console.log(data)
//     res.send(data)
//   })
// })

// app.get('/getPersons/:id', (req, res) => {
//   con.query(`SELECT * from persons WHERE id = ${req.params.id}`, (err, data) => { //V1
//     console.log(err)
//     res.send(data)
//   })
// })

// app.get('/getPersons2/:id', (req, res) => {
//   con.query('SELECT * FROM `persons` WHERE `id` = ?', [req.params.id], (err, data) => { //V2
//     console.log(err)
//     res.send(data)
//   })
// })

// app.post('/addPersons', (req, res) => {
//   con.query(`INSERT INTO person (name, age) VALUES ('${req.body.name}', '${req.body.age}')`, (err, data) => {
//     res.send({message: "Added Successfully."})
//   })
// })

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
})

app.get("/users", (req, res) => {
  res.send(userList)
})


app.get("/users/:id", (req, res) => {
  const foundUser=userList.find((x) => x.id==req.params.id)

  if(foundUser != undefined){
    res.send(foundUser)
  } else{
    res.send({message: "User is not found"})
  }
})

// app.post("/addDude", (req, res) => {
//   console.log(req.body)
//   res.send({message: "Called Successfully"})
// })

// app.patch("/users/:id", (req, res) => {
//   userList = userList.filter((userList) => userList.id != Number(req.params.id))
//   userList.push({id: req.params.id, ...req.body})

//   res.send(userList)
// })

// app.delete("/users/:id", (req, res) => {
//   userList = userList.filter((userList) => userList.id != req.params.id)

//   res.send({message: "User has been successfully deleted"})
// }) FOR POSTMAN

app.post("/addUser", (req, res) => {
  console.log(req.body)

  if (req.body != undefined) {
    userList.push(req.body)
    res.send({ message: "Add successfully" })
  } else {
    res.send({ message: "Error in adding" })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})