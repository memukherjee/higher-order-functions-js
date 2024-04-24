import map from "./map.js";
import filter from "./filter.js";
import reduce from "./reduce.js";
import forEach from "./forEach.js";

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Map:");
console.log(map(arrayOfNumbers, (number) => number * 2));
console.log("Filter:");
console.log(filter(arrayOfNumbers, (number) => number % 2 === 0));
console.log("Reduce:");
console.log(reduce(arrayOfNumbers, (acc, number) => acc + number));
console.log("ForEach:");
forEach(arrayOfNumbers, (number) => process.stdout.write(number+" "));
console.log();
