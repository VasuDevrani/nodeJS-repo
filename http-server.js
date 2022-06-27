const http = require("http");

const server = http.createServer((req, res) => {
  // request
  console.log(req.method);
  const url = req.url;
  console.log(url);

  if (url === "/") {
    // sending the header in response
    res.writeHead(200, { "content-type": "text/html" });

    // creating the msg/body
    res.write("<h1>Home Page</h1>");
    console.log("user hit the page");

    // end of msg
    res.end();
  } else if (url === "/About") 
  {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About</h1>");
    console.log("user hit the page");
    res.end();
  }
  else{
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1 style='color: red;'>Error</h1>");
    console.log("Error occured");
    res.end();
  }
});

server.listen(3000);
