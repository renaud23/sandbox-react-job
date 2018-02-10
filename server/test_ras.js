var jwt = require("jsonwebtoken");
var path = require("path");
var fs = require("fs");

const token = jwt.sign({ user: "Renaud" }, fs.readFileSync(path.join(__dirname, ".ssh", "test_rsa.pub")));
const code = jwt.verify(token, fs.readFileSync(path.join(__dirname, ".ssh", "test_rsa.pub")));
console.log(code);
