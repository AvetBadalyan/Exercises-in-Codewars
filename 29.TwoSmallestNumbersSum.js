// Sum of two lowest positive integers

/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. */

// 1st solution

function sumTwoSmallestNumbers(numbers) {
  let first = Math.min(...numbers);
  numbers.splice(numbers.indexOf(first), 1);
  let second = Math.min(...numbers);
  return first + second;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 5+2=7

// 2nd solution

function sumTwoSmallestNumbers(numbers) {
  let min = Infinity;
  let secondMin = Infinity;

  let temp = 0;
  for (i = 0; i < numbers.length; i++) {
    temp = numbers[i];
    if (temp < min) {
      secondMin = min;
      min = temp;
    } else if (temp < secondMin) {
      secondMin = temp;
    }
  }

  return min + secondMin;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 7
