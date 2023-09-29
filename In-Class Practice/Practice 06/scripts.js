console.log("Question 1:");
for(let i = 2;  i <= 10; i += 2) {
    console.log(i);
}

console.log("Question 2:");
for(let i = 5;  i > 0; i--) {
    console.log(i);
}

console.log("Question 3:");
const nums = [1, 2, 3, 4, 5];
let sum = 0;
for(const num of nums) {
    sum += num;
}
console.log(sum);

console.log("Question 4:");
const student = {name: 'John', age: 20, grade: 'A'};
for(const key in student) {
    console.log(key);
}

console.log("Question 5:");
const book = {title: 'Harry Potter', author: 'J.K. Rowling', year: 1997};
for(const key in book) {
    console.log(book[key]);
}

console.log("Question 6:");
const colors = ['red', 'green', 'blue', 'yellow'];
for(const col of colors) {
    console.log(col);
}

console.log("Question 7:");
sum = 0;
for(const num of nums) {
    sum += num;
}
console.log(sum);

console.log("Question 8:");
const temperatures = [32, 68, 75, 82, 56];
temperatures.forEach(function(temp) {
    console.log((temp-32) * 5/9);
})

console.log("Question 9:");
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const populations = {'New York': 8398748, 'Los Angeles': 3990456, 'Chicago': 2705994, 'Houston': 2300268};
cities.forEach(function(city) {
    console.log(populations[city]);
});

console.log("Question 10:");
for(let i = 0; i < 5; i++){
    var currLine = "";
    for(let j = 0; j <= i; j++){
        currLine += "*";
    }
    console.log(currLine);
}