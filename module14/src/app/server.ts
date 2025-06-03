 import app from "./app";
 const port = 5000;

 let server; 

 const startServer = async ( )=>{
     server = app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
 })
 }

 startServer()