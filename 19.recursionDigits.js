// Sum of Digits / Digital Root

/* 
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
*/

// 1st solution

function digital_root(n) {
  if (typeof n === "number") {
    if (n < 10) {
      return n;
    } else {
      return digital_root(
        n
          .toString()
          .split("")
          .reduce((acc, val) => {
            return acc + +val;
          }, 0)
      );
    }
  } else {
    return "please write a number";
  }
}

// 2nd solution

function digital_root(n) {
  return n < 10
    ? n
    : digital_root(
        String(n)
          .split("")
          .reduce((s, v) => Number(s) + Number(v))
      );
}
