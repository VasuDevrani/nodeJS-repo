const http = require("http");
const {readFileSync, writeFileSync} = require('fs')

const htmlFile = readFileSync('./question/question.html')
const cssFile = readFileSync('./question/question.css')
const jsFile = readFileSync('./question/question.js')

const server = http.createServer((req, res) => {
  // request
  console.log(req.method);
  const url = req.url;
  console.log(url);

  if (url === "/") {
    // sending the header in response
    res.writeHead(200, { "content-type": "text/html" });

    // creating the msg/body
    res.write(htmlFile);
    console.log("user hit the page");

    // end of msg
    res.end();
  } else if (url === "/question.css")  //for the url of css, js look in the html section of console of webpage
  {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(cssFile);
    console.log("Css file");
    res.end();
  }
  else if(url === "/question.js"){
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(jsFile);
    console.log("Js file");
    res.end();
  }else{
    res.writeHead(404, { "content-type": "text" });
    res.write("Error");
    console.log("Error occured");
    res.end();
  }
});

server.listen(3000);
