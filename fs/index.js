// Import FileSyatem Module
const fs = require('fs')

// Synchronous function 
const fileDataBySunc = fs.readFileSync('ChatGPT.txt', 'utf-8')
console.log(fileDataBySunc);

// Asynchronous function
fs.readFile('ChatGPT.txt', 'utf-8' ,(err, fileDataByAsync) => {
    if(!err){
        console.log(fileDataByAsync);
    }
})
const timeStamp1 = performance.now()

// function
const addNumbers = (num1, num2) => {
    return num1+num2
}
console.log(addNumbers(10,30));
const timeStamp2 = performance.now()

console.log(timeStamp2 - timeStamp1);