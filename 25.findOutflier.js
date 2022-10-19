/* Find The Parity Outlier 

You are given an array (which will have a length of at least 3, but could be very large) containing integersegers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

*/

// 1st solution

function findOutlier(integers) {
  let even = integers.filter((a) => a % 2 === 0);
  let odd = integers.filter((a) => a % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

// 2nd solution

function findOutlier(integers) {
  return integers.slice(0, 3).filter((num) => num % 2 === 0).length >= 2 // check if 3 first digits are odd or even
    ? integers.find((num) => num % 2 !== 0)
    : integers.find((num) => num % 2 === 0);
}
