console.log(process.argv)
const path = require('path');
const fs = require('fs')


const inputArguments = process.argv.slice(2);
console.log(inputArguments)

const text = inputArguments.join(' ');
console.log(text,'text')
if (!text) {
    console.error('Please provide a message to log.');
    process.exit(1);
}

const logger = (message) => {
    const timestamp = new Date().toISOString();
    const fomattedMessage = `[${timestamp}] ${message} \n`;
    console.log(fomattedMessage)

    const filename = path.join(__dirname, 'log.txt');

    fs.appendFile(filename, fomattedMessage, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
            process.exit(1);
        }

        console.log('Log message saved successfully.');
        process.exit(0);
    })
}

logger(text)

