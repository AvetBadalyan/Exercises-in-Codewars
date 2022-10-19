/* you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5" 
*/

// 1st Solution

function highAndLow(numbers) {
  let arr = numbers.split(" "); // [ 1 2 3 4 5] string
  let arrWithNumbs = arr.map((num) => parseInt(num));
  let max = Math.max(...arrWithNumbs);
  let min = Math.min(...arrWithNumbs);
  return [max, min].join(" ");
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // 42 -9

// 2nd solution

function highAndLow(numbers) {
  let arr = numbers.split(" ").map(Number);
  return Math.max(...arr) + " " + Math.min(...arr);
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // 42 -9
