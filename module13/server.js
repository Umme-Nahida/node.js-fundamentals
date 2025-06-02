const http = require('http');
const path = require('path');

const filePath = path.join(__dirname, './DB/DB.json');
const fs = require('fs');
const { config } = require('process');
const { url } = require('inspector');


// const data = [
//     { id: 1, title: 'learn nodejs'},
//     {id: 2, title: 'learn expressjs'},
//     {id: 3, title: 'learn mongodb'}
// ]

const server = http.createServer((req, res) => {
    // res.writeHead(200, {'Content-Type' : 'text/plain'});
    console.log('object',req.url, req.method)
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log('url', url.pathname, url.searchParams.get('id'));
    if (req.url === '/todos' && req.method === 'GET') {
        res.writeHead(201, { 'Content-Type': 'application/json', 'email': "mine@gmail.com" })
        const data = fs.readFileSync(filePath, "utf-8");
        // res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data));
        return;
    } else  if (req.url.startsWith('/todo') && req.method === 'GET') {
        console.log(req.url)
        res.writeHead(201, { 'Content-Type': 'application/json', 'email': "mine@gmail.com" })
        res.end('this is sing todo')
        return;
    } else if (req.url === '/todos' && req.method === 'POST') {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk.toString();            // data = data + chunk;
        })


        req.on('end', () => {
            console.log('data2', data)
            // get data from the request Body of client 
            const todo = JSON.parse(data);
            const createAt = new Date().toISOString();
            const todoData = {...todo, createAt}
            // read the existing data from the file 
            const existingData = fs.readFileSync(filePath, 'utf-8');
            // parse the existing data 
            const existingTodos = JSON.parse(existingData);
            // add the new todo to the existing todos file
            existingTodos.push(todoData);
            // write the updated all Todos data to the file
            fs.writeFileSync(filePath, JSON.stringify(existingTodos, null, 2));
            // send the response back to the client 
            console.log('todo', todoData);
            res.end(JSON.stringify(todoData));

        })
        return;
    }else{
       return res.end('Not Found route')
    }
    // res.end('this is my todo app server')
})
server.listen(3000, () => {
    console.log('server is running on port 3000')
})