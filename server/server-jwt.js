var express = require("express");
var cors = require("cors");
var path = require("path");
var fs = require("fs");
var jwt = require("express-jwt");

var app = express();

var keyPath = path.join(__dirname, ".ssh", "test_rsa.pub");
var publicKey = fs.readFileSync(keyPath);

app.use(jwt({ secret: publicKey, credentialsRequired: false }));
app.use(cors());
app.use(function(err, req, res, next) {
  console.log("name", err.name);
  if (err.name == "JWTExpressError") {
    res.status(401);
    res.send(err);
  } else if (err.name == "UnauthorizedError") {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(401);
    res.send(err);
  } else {
    next(err);
  }
});

app.get("/layout", (req, res) => {
  console.log(req.user);
  if (!req.user) {
    return res.sendStatus(401);
  } else {
    console.log("payload: ", req.user);
    res.send(JSON.stringify({ titre: `${req.user.user} authentifié avec jwt !` }));
  }
});

app.get("/accueil", (req, res) => {
  if (!req.user) {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(401);
    res.send({ code: 401, message: "Unauthorized" });
  } else if (req.user.user === "renaud") {
    res.send(JSON.stringify({ content: "Voici le contenu privé de Renaud." }));
  } else if (req.user.user === "admin") {
    res.send(JSON.stringify({ content: "Voici le contenu privé de l'admin." }));
  } else {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(403);
    res.send({ code: 403, message: "forbidden" });
  }
});

app.listen(3000);
