const http = require('http');

const data = [
    { id: 1, title: 'learn nodejs'},
    {id: 2, title: 'learn expressjs'},
    {id: 3, title: 'learn mongodb'}
]

const server = http.createServer((req,res)=>{
    // res.writeHead(200, {'Content-Type' : 'text/plain'});
    if(req.url === '/todos' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json', 'email': "mine@gmail.com"} ) 
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data));
        return;
    }else if(req.url === '/todos' && req.method === 'POST'){
        res.end('this my todo app server is creating a new todo');
        return;
    }
    res.end('this is my todo app server yahoooo')
})
server.listen(3000, ()=>{
     console.log('server is running on port 3000')
})