// Imports
const http = require('http');
const fs = require('fs');

// Server
const server = http.createServer((req, res) => {
  console.log('A request has been made');
  console.log(req.url, req.method);

  // Header Content Type
  res.setHeader('Content-Type', 'text/html');

  // Path and Routing
  let path = './views';

  switch(req.url) {
    case '/':
      path += '/index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += '/about.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '/404.html';
      res.statusCode = 404;
      break;
  }

  // Send HTML file on HTTP response
  fs.readFile(path, (err, data) => {
    if(err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  })
});

// Listen for HTTP request
server.listen(3000, 'localhost', () => {
  console.log('Now listening for requests on localhost port 3000');
})