const { readFileSync } = require('fs')
const http = require('http')
const home = readFileSync('./home.html') // this line placed here to not read file every time server listens
const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200 , {'Content-Type' : 'text/html'});
        res.write(home);
        res.end();
    }
    else{
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.write("<h1>Page Not Found</h1>");
        res.end();
    }
})
server.listen(8000);