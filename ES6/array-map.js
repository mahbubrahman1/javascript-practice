let numbers = [5, 3, 6, 2];
let output = [];
for (let number of numbers) {
    let result = number * 2;
    output.push(result);
}
console.log(output);

// let numbers = [5, 3, 6, 2];
// let output = [];
// let doubleIt = num => num * 2;
// for (let num of numbers) {
//     let result = doubleIt(num);
//     output.push(result);
// }
// console.log(output);

// let numbers = [5, 3, 6, 2];
// let doubleIt = num => num * 2;
// let output = numbers.map(doubleIt);
// console.log(output);

// const numbers = [5, 3, 6, 2];
// const result = numbers.map(x => x * 2);
// console.log(result);