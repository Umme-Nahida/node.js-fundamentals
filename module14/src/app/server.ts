import app from "./app";
const port = 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

let server;


const uri = `mongodb+srv://todoList:UQlmNVtFBzo8H6jW@cluster0.ytj0kf8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const startServer = async () => {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    server = app.listen(port, () => {
        console.log(`Example app listening on ports ${port}`)
    })
}

startServer()