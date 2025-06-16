import express, { Application, Request, Response } from 'express'
import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose'


const app: Application = express()

app.use(express.json());

// const userSchema = new Schema({
//      name: String,
//      email: String,
//      phone: Number,
//      password: String
// })
const userSchema = new Schema({
     title: {type: String, required: true, trim: true},
     content: {type: String, default: "No content"},
     category: {type: String, enum: ['new clothes','clothes','shoes', 'food'], default: 'new clothes'},
    tag:{
        wordPress: String,
        shopify: String
     }
})

const Users = mongoose.model('Users', userSchema);

app.post('/create-user', async(req: Request, res: Response) => {

  // const user = new Users({
  //   title: "My first post"
  // })
  // await user.save()
  const body = req.body;
  console.log(body)
  const user = await Users.create(body)

  res.status(201).json(user)
})

app.get('/getUsers', async(req: Request, res: Response) => {

  const users = await Users.find()

  res.status(201).json(users)
})



app.patch('/updateUser/:id', async(req,res)=>{
  const id = req.params.id;
  const body = req.body;

  // findById and findeOneAndUpdate are same worked

   const result = await Users.findByIdAndUpdate(id,body, {new: true})
  // const result = await Users.findOneAndUpdate({_id: new ObjectId(id)},body, {new: true})
  // like that mongodb updateOne method
  // const result = await Users.updateOne({_id: new ObjectId(id)},body, {new: true})
  res.status(201).json(result)
})

app.delete('/deleteUser/:id', async(req,res)=>{
  const id = req.params.id;
  // findById and findeOneAndUpdate are same worked

   const result = await Users.findByIdAndDelete(id)
  // const result = await Users.findOneAndDelete({_id: new ObjectId(id)})
  // like that mongodb updateOne method
  // const result = await Users.updateOne({_id: new ObjectId(id)})
  res.status(201).json(result)
})


app.get('/getUser/:id', async(req: Request, res: Response) => {
  const {id} = req.params;
  // const query = {_id: new ObjectId(id)}


  const user = await Users.findOne({title: "Part time employee"})

  res.status(201).json(user)
})

app.get('/', (req: Request, res: Response) => {
  res.send('mongoose schema example')
})



export default app;

