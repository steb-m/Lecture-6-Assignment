function removeEven(...arr) {
    return arr.filter(num => num % 2 != 0);
}

let nums = [1, 2, 4, 5, 10, 6, 3];
console.log(removeEven(...nums))

function removeDupe(...arr) {
    let uniques = new Set();
    for (let i = 0; i < arr.length; i++) {
        uniques.add(arr[i]);
    }
    return uniques;
}

let dupes = [1, 1, 1, 2, 2, 4, 4, 4, 5, 8, 8, 9, 3, 3];
console.log(removeDupe(...dupes))

function search(target, arr) {
    return arr.includes(target);
}

console.log(search(6, dupes)); // false
console.log(search(3, dupes)) // true

function convertASCII(...arr) {
    let ascii = new Map();
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        ascii.set(num, String.fromCharCode(num));
    }
    return ascii;
}

let ascii = [65, 67, 122, 75, 88, 90];
console.log(convertASCII(...ascii));