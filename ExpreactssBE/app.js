const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const cors = require("cors");

app.use(cors());
app.use(express.json());

const userList = [
  { id: 1, name: "Patrick", age: 27 },
  { id: 2, name: "Gran", age: 28 },
  { id: 3, name: "Ean", age: 29 },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/users", (req, res) => {
  res.send(userList);
});

app.post("/addUser", (req, res) => {
  console.log(req.body);

  if (req.body != undefined) {
    userList.push(req.body);
    res.send({ message: "Add successfully" });
  } else {
    res.send({ message: "Error in adding" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});