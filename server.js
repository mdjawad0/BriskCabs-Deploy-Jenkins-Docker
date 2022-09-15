const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

// local DB
const db = [
  {
    username: "user1",
    password: "123456",
    isAdmin: false,
  },
  {
    username: "admin",
    password: "123456",
    isAdmin: true,
  },
];

app.post("/api/register", (req, res) => {
  req.body.isAdmin = false;
  db.push(req.body);

  console.log(db);

  res.status(201).json({ msg: "register success" });
});
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = db.find((user) => user.username === username);
  if (!user) {
    res.status(400).json({msg: "user not found"});
    return;
  }
  if (user.password !== password) {
    res.status(400).json({msg: "Invalid credentials"});
    return;
  }
  res.status(200).json({ msg: "login success", isAdmin: user.isAdmin });
});

app.listen(8000, () => {
  console.log("server is listening at 8000");
});
