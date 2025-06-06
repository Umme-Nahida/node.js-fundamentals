import express, { Application, Request, Response } from 'express'
const app: Application = express()
import path from 'path';
import fs from 'fs';
import { todosRouter } from './todos/todosRoute';
const filePath = path.join(__dirname, '../../DB/todo.json');

// all middleware 
app.use(express.json())
app.use('/todos', todosRouter)


app.get('/', (req: Request , res: Response ) => {
  res.send('this is my todos project')
})

app.post('/createTodo', (req : Request, res: Response)=>{
  console.log('created todo route')
  res.send('created todo')
})

app.get('/users', (req : Request, res: Response)=>{
  console.log('this is user route')
  res.send('this is users')
})

app.get('/todo', (req: Request , res: Response ) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  console.log(req.body)
  res.send( JSON.parse(data))
})


export default app;
