const http = require('http');
// const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (data) => {
      body += data;
      // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
      if (body.length > 1e6) {
        // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
        req.connection.destroy();
      }
    });
    req.on('end', () => {
      const POST = qs.parse(body);
      console.log(JSON.parse(POST));
    });
  }
});
server.listen(8443);
