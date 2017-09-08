const http = require('http');
// const url = require('url');
// const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req
      .on('data', (d) => {
        body += d;
      })
      .on('end', () => {
        console.log('fini !');
      });
    console.log(body);
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
