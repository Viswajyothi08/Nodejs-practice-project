var http = require('http');
server = http.createServer(function(req,res) {
    console.log("url:"+req.url);
    console.log("method:"+req.method);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end('hellooworld');
    
}).listen(8080);
