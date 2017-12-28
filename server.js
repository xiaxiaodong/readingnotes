const http = require('http');
const url = require('url');
const fs = require('fs'); 

const log = (...str) => {
    console.log.apply({}, str);
}

// 创建一个 HTTP 代理服务器
const server = http.createServer((req, res) => {
    // 放开跨域请求 方便练习
    res.setHeader('Access-Control-Allow-Origin', '*');
    let pathname = url.parse(req.url).pathname;
    handleFile(req, res, pathname);
});

const handleFile = (req, res, pathname) => {
    if (!pathname || pathname == '/') pathname = '/index.html';
    log(`---------->  ${pathname}`);
    
    let stream = fs.createReadStream(__dirname + pathname);
    stream.on('error',function(error){
        console.dir(error)
        res.writeHead(404);
        res.end('file not found')
    })
    stream.pipe(res)
}

server.on('listening', () => {
    log(`server start...   listen at port:${server.address().port}`);
})
server.listen(80);