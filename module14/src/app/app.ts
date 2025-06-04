import express, { Application, Request, Response } from 'express'
const app: Application = express()
import path from 'path';
import fs from 'fs';

const filePath = path.join(__dirname, '../../DB/todo.json');
app.use(express.json())


const todosRouter = express.Router();
const userRouter = express.Router();

app.use('/todos', todosRouter)


app.get('/', (req: Request , res: Response ) => {
  res.send('this is my express app!')
})

app.get('/todos', (req: Request , res: Response ) => {

  const data = fs.readFileSync(filePath, 'utf-8');
  console.log(req.body)
  res.send('this is my express app!')
})



export default app;
