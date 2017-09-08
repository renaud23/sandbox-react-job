var http = require("http");
var url = require("url");
var querystring = require("querystring");

var server = http.createServer((req, res) => {
  if (req.method == "POST") {
    req
      .on("data", d => {
        console.log(d);
      })
      .on("end", () => {
        console.log("fini !");
      });
  }
  // res.writeHead(200, {
  //   "Content-Type": "application/json",
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Headers": "Content-Type, Accept, Authorization",
  //   "Access-Control-Allow-Methods": "GET"
  // });
  //
  // var obj = { titre: "titre reçu depuis une requçete XHR" };
  // res.write(JSON.stringify(obj));
  // res.end();
});
server.listen(8443);
