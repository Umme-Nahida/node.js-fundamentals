// Include the fs module
const fs = require('fs');

// -------------------------------------------------------------Read the file synchronously

// console.log('task 1')
// const text= "I love to traveling to the world";
// fs.writeFileSync('./input.txt',text);
// console.log('this is task 2')
// const data = fs.readFileSync('./input.txt',{ encoding: 'utf8', flag: 'r' });
// console.log('this is task 3')


// Display the file content
// console.log(data);

// let text='I written something'
// console.log('task one 01')
// // -------------------------------------------------------------read the file Asyncronously
// fs.writeFile('./hello.txt',text, {encoding:'utf-8'},(err)=>{
//     if(err){
//         console.log('something went wrong',err)
//         return;
//     }
//     console.log("successfully written ")
// })

// fs.readFile('./input.txt',{encoding:'utf-8'},(err,data)=>{
//     if(err){
//         console.log('something went wrong',err)
//         return;
//     }
//     console.log('Notes:',data)
// })

// console.log('task two 02')


let text='I written something'
console.log('task one 01')
// display the data with asyncronusly



// -----------------------------------------------------Stream & buffer
// fs.readFile('./input.txt',{encoding:'utf-8'},(err,data)=>{
//     if(err){
//         console.log('something went wrong',err)
//         return;
//     }
//     console.log('Notes:',data)

//     fs.writeFile('./hello.txt',data, {encoding:'utf-8'},(err)=>{
//     if(err){
//         console.log('something went wrong',err)
//         return;
//     }
//     console.log("successfully written ")
// })
// })

// console.log('task two 02')


// ------------------------------------------------create readStream event and lishener
const readStream = fs.createReadStream('./hello.txt',{encoding:'utf-8'})
const writeStream = fs.createWriteStream('./input.txt',{encoding:'utf-8'})

readStream.on('data',(data)=>{
    console.log(data)
})





