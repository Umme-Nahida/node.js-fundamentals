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
  
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;
    // console.log('url', url.pathname, url.searchParams.get('id'));

    if (pathname === '/todos' && req.method === 'GET') {
        res.writeHead(201, { 'Content-Type': 'application/json', 'email': "mine@gmail.com" })
        const data = fs.readFileSync(filePath, "utf-8");
        // res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data));
        return;
    } else  if (req.url.startsWith('/todo') && req.method === 'GET') {
        console.log(url)
        //get the title from the params 
        const existingData = fs.readFileSync(filePath, 'utf-8');
        const existingTodos = JSON.parse(existingData);

        const title = url.searchParams.get('title');
        const singleTodo = existingTodos.find((todo)=> todo.title === title);
         if(!singleTodo){
            res.writeHead(404, { 'Content-type' : 'application/json' })
            return res.end(JSON.stringify({message: 'this todo is not found'}))
         }
        res.writeHead(201, { 'Content-Type': 'application/json', 'email': "mine@gmail.com" })
        res.end(JSON.stringify(singleTodo));
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
    }
     // update the todo
     else if (req.url.startsWith('/update') && req.method === 'PATCH') {
        console.log('hea ami ashte perechi')
        let data = '';
        req.on('data', (chunk) => {
            data += chunk.toString();            // data = data + chunk;
        })


        req.on('end', () => {
            console.log('data2', data)
            // get data from the request Body of client 
            const {title} = JSON.parse(data);
            const titleToUpdate = url.searchParams.get('title')
            
            // read the existing data from the file 
            const existingData = fs.readFileSync(filePath, 'utf-8');
            // parse the existing data 
            const existingTodos = JSON.parse(existingData);
            // add the new todo to the existing todos file
            const todoIndex = existingTodos.findIndex((todo)=> todo.title === titleToUpdate)
            console.log('todoindex' ,todoIndex)
           const oldTodo = existingTodos[todoIndex];
           console.log('oldtodo1', oldTodo)
           existingTodos[todoIndex] = {...oldTodo, title, updateAt: new Date().toISOString()}
           
           console.log('oldtodo2', oldTodo)
           
            // write the updated all Todos data to the file
            fs.writeFileSync(filePath, JSON.stringify(existingTodos, null, 2));
            // send the response back to the client 
            
            res.end(JSON.stringify({...oldTodo, updateAt: new Date().toISOString()}));

        })
        return;
    }
    
    else{
       return res.end('Not Found route')
    }
    // res.end('this is my todo app server')
})
server.listen(3000, () => {
    console.log('server is running on port 3000')
})