const calc = function(callback, a, b){
    return callback(a, b)
}

const sum = function(num1, num2){
    return num1 + num2;
}
const dif = function(num1, num2){
    return num1 - num2;
}

const result = calc(sum, 10, 40)
console.log(result);