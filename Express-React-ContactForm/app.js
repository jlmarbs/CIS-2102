const express = require("express");
const app = express();
const port = 3000;
const userList = [
  { ID: 1, Day: 8, name: "Carlo", Status: "ONGOING" },
  { ID: 2, Day: 2, name: "Jedd", Status: "FAILED" },
  { ID: 3, Day: 1, name: "Achille", Status: "FAILED" },
  { ID: 4, Day: 5, name: "Xander", Status: "FAILED" },
  { ID: 5, Day: 1, name: "Sir Patrick", Status: "FAILED" },
];
var cors = require("cors");

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("NO NUT NOVEMBER");
});

app.get("/users", (req, res) => {
  res.send(userList);
});

app.get("/users/:ID", (req, res) => {
  // console.log(req.params.Day)
  const foundUser = userList.find((x) => x.ID == req.params.ID);
  if (foundUser != undefined) {
    res.send(foundUser);
  } else {
    res.send({ message: "The user is not found." });
  }
  console.log(foundUser);
});

app.post("/addUsers", (req, res) => {
  console.log(req.body);

  if (req.body != undefined) {
    userList.push(req.body);
    res.send({ message: "NO NUT NOVEMBER!" });
  } else {
    res.send({ message: "skill issue" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
