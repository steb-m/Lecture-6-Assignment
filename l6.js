const prompt = require('prompt-sync')();



// Map
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function(number) {
    return number + 30;
});
console.log(doubled);

// Filter
let tripled = numbers.filter(function(number) {
    if (number == 2 || number == 4) {
        return number;
    }
})
console.log(tripled);


// Sort

const fruits = [2, 1, 9, 7, 8, 100, 40];
console.log(fruits.sort(function(a, b) { 
    // sort treats numbers as strings, therefore we have to 
    // create a placeholder that returns positive or negative values,
    // sorting it that way. while still sorting the original array.
    return a - b;
}));
console.log(fruits.reverse());

// Fill

let arr = new Array(3);
console.log(arr);
console.log(arr.length);

const sliced = arr.slice(2, 4);
console.log(sliced);
console.log(numbers.reverse().reverse());

// Set

let letters = new Set();
letters.add('a');
letters.add('b');
letters.add('c');
letters.add('a');

console.log(letters);
letters.clear();
console.log(letters);
let orr = Array.from(letters);
console.log(orr);


// Map

let fruitLoops = new Map([
    ["apple", 500],
    ["banana", 300],
    ["orange", 200]
])

console.log(fruitLoops);
fruitLoops.set("apple", 400);
console.log(fruitLoops);
fruitLoops.set("grape", 250);
console.log(fruitLoops)
console.log(fruitLoops.get("apple"));
console.log(fruitLoops.size);