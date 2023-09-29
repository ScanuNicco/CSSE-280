//Question 1
function multiply(x, y) {
    return x*y;
}

//Question 2
function isEven(num) {
    return num % 2 == 0;
}

//Question 3
const subtract = function(a, b) {
    return a-b;
}

//Question 4
const greeting = function(name) {
    return `Hello, ${name}!`;
}

//Question 5
function calculate(x, y){
    const add = function(x, y) {
        return Math.pow(x + y, 2);
    }
    return add(x, y);
}

//Question 6
function average(x, y, z) {
    const avg = function(x, y, z) {
        return (x + y + z) / 3;
    }
    return avg(x, y, z);
}

//Question 7
const mulArrow = (a, b) => a * b;

//Question 8
const greetArrow = (name) => `Hello, ${name}`;

//Question 9
const square = (x) => x*x;

//Question 10
const isEvenArrow = (num) => num % 2 == 0;

//Question 11
const findMax = (...nums) => Math.max(...nums);

//Question 12
const addTwoNumbers = (a, b) => a + b;

//Tests
console.log(multiply(5,6));
console.log(isEven(7));
console.log(subtract(3, 4));
console.log(greeting("Nicco"));
console.log(calculate(3, 4));
console.log(average(3, 4, 5));
console.log(mulArrow(5,6));
console.log(greetArrow("Nicco"));
console.log(square(12));
console.log(isEvenArrow(7));
console.log(findMax(1, 2, 6, 42, 8));
console.log(addTwoNumbers(2, 2));