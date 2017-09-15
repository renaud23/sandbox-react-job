// {
//   "Content-Type": "application/json",
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Headers": "Content-Type, Accept, Authorization",
//   "Access-Control-Allow-Methods": "POST"
// };

const USERS = [{ user: "admin", password: "admin" }, { user: "renaud", password: "renaud" }, { user: "olivier", password: "onyxia" }];

var express = require("express");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.post("/", (req, res) => {
  console.log("Auht : ", req.body);
  const { user, password } = req.body;

  const find = USERS.find(e => user === e.user && password === e.password);
  if (find) {
    const payload = { user: req.body.user, exp: Math.floor(Date.now() / 1000) + 60 };
    const token = jwt.sign(payload, fs.readFileSync(path.join(__dirname, ".ssh", "test_rsa.pub")));
    res.json({ token });
  } else {
    return res.sendStatus(401);
  }
});
app.listen(8443);
