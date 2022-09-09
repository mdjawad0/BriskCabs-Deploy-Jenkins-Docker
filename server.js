const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.post("/api/register", (req, res) => {
    res.status(201).json({ msg: "register success" });
});
app.post("/api/login", (req, res) => {
  console.log(req.data);
  res.status(200).json({ msg: "login success" });
});

app.listen(8000, () => {
  console.log("server is listening at 8000");
  
});
