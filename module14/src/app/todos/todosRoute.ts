 import express, { json, Request, Response } from 'express';
 import path from 'path';
 import fs from 'fs';
const filePath = path.join(__dirname, '../../../DB/todo.json');
 export const todosRouter = express.Router();

 todosRouter.get('/', (req: Request , res: Response ) => {
   console.log('hei ami todos route ')
   const data = fs.readFileSync(filePath, 'utf-8');
   console.log(req.body)
   res.send(JSON.parse(data))
 })
