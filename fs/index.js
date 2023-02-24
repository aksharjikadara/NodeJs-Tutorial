// Import FileSyatem Module
const fs = require('fs')

// Synchronous function 
const fileDataBySunc = fs.readFileSync('ChatGPT.txt', 'utf-8')
console.log(fileDataBySunc);

// Asynchronous function
const fileDataByAsync = fs.readFile('ChatGPT.txt', 'utf-8' ,(err, data) => {
    console.log(data);
})

