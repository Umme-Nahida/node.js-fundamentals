import express, { Application, Request, Response } from 'express'
const app: Application = express()
import path from 'path';
import fs from 'fs';
import { todosRouter } from './todos/todosRoute';
import { client } from '../mongodb';
import { ObjectId } from 'mongodb';
const filePath = path.join(__dirname, '../../DB/todo.json');

// all middleware 
app.use(express.json())
app.use('/todos', todosRouter)


app.get('/', (req: Request, res: Response) => {
  res.send('this is my todos project')
})

todosRouter.post('/createTodo', async (req: Request, res: Response) => {
  const testTodo = req.body;
  console.log(testTodo)
  const db = client.db("todoList");
  const collection = db.collection("todosCollection")
  await collection.insertOne(testTodo)
    .then(() => {
      console.log("inserted todo ")
    })

  const todos = await collection.find({}).toArray()
  res.json(todos)
})

// get single todo by id 
todosRouter.get('/:id', async (req: Request, res: Response) => {
  const db = client.db("todoList");
  const collection = db.collection("todosCollection")
  const id = req.params.id;
  console.log(id)
  const query = { _id: new ObjectId(id) };
  const todo = await collection.findOne(query);
  res.json(todo);

})

// update todo by id
todosRouter.put('/update-todo/:id', async (req: Request, res: Response) => {
  const db = client.db("todoList");
  const collection = db.collection("todosCollection")
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const {title, description, dueDate, complete, createdAt} = req.body;

  const todo = await collection.updateOne(
    query, 
    {$set: {title, description, dueDate, complete, createdAt}},
    {upsert: true})
    res.json(todo);

})

app.get('/users', (req: Request, res: Response) => {
  console.log('this is user route')
  res.send('this is users')
})

app.get('/todo', (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  console.log(req.body)
  res.send(JSON.parse(data))
})


export default app;
