// Include the fs module
const fs = require('fs');

// Read the file synchronously
const data = fs.readFileSync('./input.txt',{ encoding: 'utf8', flag: 'r' });

// Display the file content
console.log(data);