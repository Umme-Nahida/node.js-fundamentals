import { client } from "../mongodb";
import app from "./app";
const port = 5000;

let server;



const startServer = async () => {
   
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");

  
    server = app.listen(port, () => {
        console.log(`Example app listening on ports ${port}`)
    })
}

startServer()