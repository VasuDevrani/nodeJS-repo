const http = require('http');

// setting up the server
const server = http.createServer((req,res) => {
    if(req.url === '/')
    {
        res.end('Welcome to Home Page')
    }
    else if(req.url === '/new')
    {
        res.end('Here is our short history');
    }
    // default
    else {
            res.end(`
            <h1>OOPS!</h1>
            <a href='/'>back home</a>
        `)
    }
})

// port to which the server is gonna listen
server.listen(3000)