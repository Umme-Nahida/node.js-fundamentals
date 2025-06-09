import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://todoList:UQlmNVtFBzo8H6jW@cluster0.ytj0kf8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
